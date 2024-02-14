import fs from 'fs/promises';
import path from 'path';
import {svg64} from 'svg64';
import * as svgson from 'svgson';
import {dash_to_pascal} from './dash-to-pascal';
import {format_ts} from './format-ts';

const root_dir = path.join(process.cwd(), '..');
const assets_dir = path.join(root_dir, 'assets/icons');
const output_dir = path.join(root_dir, 'packages/icons-react/src');

const encoding: BufferEncoding = 'utf-8';

async function generate_react_icons() {
	const locations = await get_asset_locations();

	/*
	 * TODO:
	 * - check if src directory exists, create if not
	 * - clean src directory
	 */

	const import_paths = await Promise.all(
		locations.map(async (location) => {
			const component = await to_react_component(location);

			const destination = path.join(output_dir, `${component.name}.tsx`);

			await fs.writeFile(destination, await format_ts(component.content), {
				encoding,
			});

			return `./${component.name}`;
		}),
	);

	await create_barrel_file(import_paths);
}

async function create_barrel_file(import_paths: string[]) {
	const location = path.join(output_dir, 'index.ts');
	const content = import_paths.map((path) => `export * from '${path}';`).join('\n');

	await fs.writeFile(location, await format_ts(content), {encoding});
}

async function to_react_component(location: string) {
	const content = await fs.readFile(location, {encoding});

	const $0 = 'REACT_REF';
	const $1 = 'REACT_SPREAD_PROPS';

	const node = await svgson.parse(content, {
		camelcase: true,
		transformNode(node) {
			if (node.name === 'svg') {
				node.attributes[$0] = '';
				node.attributes[$1] = '';
				node.attributes.width = '16';
				node.attributes.height = '16';
			}

			return node;
		},
	});

	const react_svg = svgson.stringify(node, {
		selfClose: true,
		transformAttr(key, value, esc) {
			if (key === $0) {
				return 'ref={ref}';
			}

			if (key === $1) {
				return '{...props}';
			}

			if (key === 'stroke') {
				return 'stroke="currentColor"';
			}

			if (key === 'strokeWidth') {
				return 'strokeWidth="1.66667"';
			}

			return `${key}="${esc(value)}"`;
		},
	});

	const name = path.parse(location).name;
	const jsdoc_preview = svg64(content);
	const component_name = `${dash_to_pascal(name)}Icon`;
	const react_component = to_react_template(component_name, react_svg, jsdoc_preview);

	return {
		name: component_name,
		content: react_component,
	};
}

function to_react_template(name: string, content: string, preview: string) {
	return `
		// Generated File

    import * as React from 'react';

    /**
     * 
     * ![img](${preview})
     * 
     */
		export const ${name} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
			return ${content};
		});

		${name}.displayName = '${name}'
	`;
}

async function get_asset_locations() {
	const filenames = await fs.readdir(assets_dir, {encoding});

	return filenames.map((fileName) => path.join(assets_dir, fileName));
}

generate_react_icons();
