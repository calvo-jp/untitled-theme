import fs from 'fs/promises';
import path from 'path';
import * as svgson from 'svgson';
import { clean_or_create_dir } from './clean-or-create-dir';
import { BarrelItem, create_barrel_file } from './create-barrel-file';
import { dash_to_pascal } from './dash-to-pascal';
import { format_html } from './format-html';
import { generate_jsdoc_preview } from './generate-jsdoc-preview';
import { Icon, get_icons } from './get-icons';
import { workspace_root } from './workspace-root';

const outdir = path.join(workspace_root, 'packages/icons-svelte/src');

async function generate_svelte_icons() {
	const icons = get_icons();

	await clean_or_create_dir(outdir);

	const items = await Promise.all(
		icons.map<Promise<BarrelItem>>(async (icon) => {
			const Component = await to_svelte_component(icon);
			const destination = path.join(outdir, `${icon.filename}.svelte`);

			await fs.writeFile(destination, await format_html(Component.content), {encoding: 'utf-8'});

			return {
				path: `./${icon.filename}.svelte`,
				modules: [
					{
						as: Component.name,
						name: 'default',
					},
				],
			};
		}),
	);

	await create_barrel_file(outdir, items);
}

async function to_svelte_component(icon: Icon) {
	const node = await svgson.parse(icon.content, {
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

interface TemplateConfig {
	content: string;
	jsdoc?: string;
}

function template(config: TemplateConfig) {
	return `
		<script lang="ts">
			import type {SVGAttributes} from 'svelte/elements';

			let {...props} = $props<SVGAttributes<SVGSVGElement>>();  
		</script>

		<!-- @component ${config.jsdoc} -->

		${config.content}
	`;
}

generate_svelte_icons();
