import fs from 'fs/promises';
import path from 'path';
import {svg64} from 'svg64';
import * as svgson from 'svgson';
import {dash_to_pascal} from './dash-to-pascal';
import {format_html} from './format-html';
import {format_ts} from './format-ts';

const root_dir = path.join(process.cwd(), '..');
const assets_dir = path.join(root_dir, 'assets/icons');
const output_dir = path.join(root_dir, 'packages/icons-svelte/src');

const encoding: BufferEncoding = 'utf-8';

async function generate_svelte_icons() {
	const locations = await get_asset_locations();

	/*
	 * TODO:
	 * - check if src directory exists, create if not
	 * - clean src directory
	 */

	const import_paths = await Promise.all(
		locations.map(async (location) => {
			const component = await to_svelte_component(location);

			const destination = path.join(output_dir, `${component.name}.svelte`);

			await fs.writeFile(destination, await format_html(component.content), {
				encoding,
			});

			return {
				module: component.name,
				path: `./${component.name}.svelte`,
			};
		}),
	);

	await create_barrel_file(import_paths);
}

interface BarrelItem {
	path: string;
	module: string;
}

async function create_barrel_file(items: BarrelItem[]) {
	const location = path.join(output_dir, 'index.ts');
	const content = items
		.map((item) => `export {default as ${item.module}} from '${item.path}';`)
		.join('\n');

	await fs.writeFile(location, await format_ts(content), {encoding});
}

async function to_svelte_component(location: string) {
	const content = await fs.readFile(location, {encoding});

	const node = await svgson.parse(content, {
		transformNode(node) {
			if (node.name === 'svg') {
				node.attributes.rest = '';
				node.attributes.width = '16';
				node.attributes.height = '16';
			}

			return node;
		},
	});

	const svelte_svg = svgson.stringify(node, {
		selfClose: true,
		transformAttr(key, value, esc) {
			if (key === 'rest') {
				return '{...props}';
			}

			if (key === 'stroke') {
				return 'stroke="currentColor"';
			}

			if (key === 'stroke-width') {
				return 'stroke-width="1.66667"';
			}

			return `${key}="${esc(value)}"`;
		},
	});

	const name = path.parse(location).name;
	const jsdoc_preview = svg64(content);
	const component_name = `${dash_to_pascal(name)}Icon`;
	const svelte_component = to_svelte_template(component_name, svelte_svg, jsdoc_preview);

	return {
		name: component_name,
		content: svelte_component,
	};
}

function to_svelte_template(name: string, content: string, preview: string) {
	return `
    <script lang="ts">
		// Generated File
    
    import type {SVGAttributes} from 'svelte/elements';

    let {...props} = $props<SVGAttributes<SVGSVGElement>>();  
    </script>
    
    ${content}
	`;
}

async function get_asset_locations() {
	const filenames = await fs.readdir(assets_dir, {encoding});

	return filenames.map((fileName) => path.join(assets_dir, fileName));
}

generate_svelte_icons();
