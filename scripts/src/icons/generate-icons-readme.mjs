// @ts-check

import fs from 'fs/promises';
import path from 'path';
import svgson from 'svgson';
import {config} from './config.mjs';
import {format_html} from './format.mjs';
import {get_icons} from './get-icons.mjs';
import {get_workspace_root} from './get-workspace-root.mjs';

const template = `
  <div style="display:flex;flex-wrap:wrap;gap:0.25rem;padding:1rem;background:white;">
    %content%
  </div>
`;

const workspace_root = get_workspace_root();

export async function generate_icons_readme() {
	const icons = await get_icons();

	const promises = icons.map(async (icon) => {
		const parsed = await svgson.parse(icon.content, {
			transformNode(node) {
				if (node.name === 'svg') {
					node.attributes['width'] = config.width;
					node.attributes['height'] = config.height;
					node.attributes['viewBox'] = config.viewBox;
					node.attributes['aria-hidden'] = config.ariaHidden;
				}

				return node;
			},
		});

		return svgson.stringify(parsed, {
			transformAttr(key, value, esc) {
				if (key === 'stroke') {
					return `${key}="black"`;
				}

				if (key === 'strokeWidth') {
					return `${key}="${config.strokeWidth}"`;
				}

				return `${key}="${esc(value)}"`;
			},
		});
	});

	const content = await Promise.all(promises).then((icons) => icons.join('\n'));

	await fs.writeFile(
		path.join(workspace_root, 'assets/icons.md'),
		await format_html(template.replace('%content%', content)),
		{encoding: 'utf-8'},
	);
}

await generate_icons_readme();
