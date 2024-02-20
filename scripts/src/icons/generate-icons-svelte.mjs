// @ts-check

import fs from 'fs/promises';
import path from 'path';
import svgson from 'svgson';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_dir_clean} from './create-dir-clean.mjs';
import {dash_to_pascal} from './dash-to-pascal.mjs';
import {format_html} from './format.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';
import {get_icons} from './get-icons.mjs';
import {workspace_root} from './workspace-root.mjs';

const outdir = path.join(workspace_root, 'packages/icons-svelte/src');

export async function generate_icons_svelte() {
	const icons = await get_icons();

	await create_dir_clean(outdir);

	const items = await Promise.all(
		icons.map(async (icon) => {
			const Component = await to_svelte_component(icon);
			const destination = path.join(outdir, `${icon.filename}.svelte`);

			await fs.writeFile(destination, await format_html(Component.content), {encoding: 'utf-8'});

			/**
			 * @type {import('./create-barrel-file.mjs').BarrelItem}
			 */
			const item = {
				path: `./${icon.filename}.svelte`,
				modules: [
					{
						name: 'default',
						as: Component.name,
					},
				],
			};

			return item;
		}),
	);

	await create_barrel_file(outdir, items);
}

/**
 * @param {import('./get-icons.mjs').Icon} icon
 * @returns {Promise<{name: string, content: string}>}
 */
async function to_svelte_component(icon) {
	const node = await svgson.parse(icon.content, {
		transformNode(node) {
			if (node.name === 'svg') {
				node.attributes.rest = '';
				node.attributes.width = '16';
				node.attributes.height = '16';
				node.attributes['aria-hidden'] = 'true';
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

	const component_name = `${dash_to_pascal(icon.filename)}Icon`;

	const svelte_component = template({
		content: svelte_svg,
		jsdoc: await generate_jsdoc_preview(icon.content),
	});

	return {
		name: component_name,
		content: svelte_component,
	};
}

/**
 * @typedef TemplateConfig
 * @property {string} content
 * @property {string} [jsdoc]
 */

/**
 * @param {TemplateConfig} config
 */
function template(config) {
	return `
		<script lang="ts">
			import type {SVGAttributes} from 'svelte/elements';

			let {...props} = $props<SVGAttributes<SVGSVGElement>>();  
		</script>

		<!-- @component ${config.jsdoc} -->

		${config.content}
	`;
}
