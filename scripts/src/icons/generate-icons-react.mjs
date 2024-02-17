// @ts-check

import fs from 'fs/promises';
import path from 'path';
import * as svgson from 'svgson';
import {clean_or_create_dir} from './clean-or-create-dir.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {dash_to_pascal} from './dash-to-pascal.mjs';
import {format_ts} from './format-ts.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';
import {get_icons} from './get-icons.mjs';
import {spinner} from './spinner.mjs';
import {workspace_root} from './workspace-root.mjs';

const outdir = path.join(workspace_root, 'packages/icons-react/src');

export async function generate_icons_react() {
	const icons = get_icons();

	await clean_or_create_dir(outdir);

	/**
	 * @type {import('./create-barrel-file.mjs').BarrelItem[]}
	 */
	const items = await Promise.all(
		icons.map(async (icon) => {
			const Component = await to_react_component(icon);
			const destination = path.join(outdir, `${icon.filename}.tsx`);

			await fs.writeFile(destination, await format_ts(Component.content), {encoding: 'utf-8'});

			return {
				path: `./${icon.filename}`,
				modules: [
					{
						name: Component.name,
					},
				],
			};
		}),
	);

	await create_barrel_file(outdir, items);
}

/**
 * @param {import('./get-icons.mjs').Icon} icon
 * @returns {Promise<{name: string, content: string}>}
 */
async function to_react_component(icon) {
	const node = await svgson.parse(icon.content, {
		camelcase: true,
		transformNode(node) {
			if (node.name === 'svg') {
				node.attributes.ref = '';
				node.attributes.rest = '';
				node.attributes.width = '16';
				node.attributes.height = '16';
			}

			return node;
		},
	});

	const react_svg = svgson.stringify(node, {
		selfClose: true,
		transformAttr(key, value, esc) {
			if (key === 'ref') {
				return 'ref={ref}';
			}

			if (key === 'rest') {
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

	const component_name = `${dash_to_pascal(icon.filename)}Icon`;

	const react_component = template({
		name: component_name,
		content: react_svg,
		jsdoc: await generate_jsdoc_preview(icon.content),
	});

	return {
		name: component_name,
		content: react_component,
	};
}

/**
 * @typedef TemplateConfig
 * @property {string} name
 * @property {string} content
 * @property {string} [jsdoc]
 *
 */

/**
 * @param {TemplateConfig} config
 * @returns {string}
 */
function template(config) {
	return `
		import * as React from 'react';

		/**
		 * ${config.jsdoc}
		 */
		export const ${config.name} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
			return ${config.content};
		});

		${config.name}.displayName = '${config.name}'
	`;
}

(async () => {
	spinner.start('Generating React icons...');

	try {
		await generate_icons_react();
		spinner.succeed('React icons generated');
	} catch {
		spinner.fail('Error generating React icons');
	} finally {
		spinner.stop();
	}
})();
