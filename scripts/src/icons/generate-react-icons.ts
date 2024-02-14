import fs from 'fs/promises';
import path from 'path';
import {svg64} from 'svg64';
import * as svgson from 'svgson';
import {clean_or_create_dir} from './clean-or-create-dir';
import {BarrelItem, create_barrel_file} from './create-barrel-file';
import {dash_to_pascal} from './dash-to-pascal';
import {format_ts} from './format-ts';
import {Icon, get_icons} from './get-icons';
import {workspace_root} from './workspace-root';

const outdir = path.join(workspace_root, 'packages/icons-react/src');

async function generate_react_icons() {
	const icons = get_icons();

	await clean_or_create_dir(outdir);

	const items = await Promise.all(
		icons.map<Promise<BarrelItem>>(async (icon) => {
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

async function to_react_component(icon: Icon) {
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
		jsdoc: `![img](${svg64(icon.content)})`,
	});

	return {
		name: component_name,
		content: react_component,
	};
}

interface TemplateConfig {
	name: string;
	content: string;
	jsdoc?: string;
}

function template(config: TemplateConfig) {
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

generate_react_icons();
