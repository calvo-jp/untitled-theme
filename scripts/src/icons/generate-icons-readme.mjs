// @ts-check

import fs from 'fs/promises';
import path from 'path';
import {format_html} from './format.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';
import {get_icons} from './get-icons.mjs';
import {get_workspace_root} from './get-workspace-root.mjs';

const template = `
    %content%
`;

const workspace_root = get_workspace_root();

export async function generate_icons_readme() {
	const icons = await get_icons();

	const promises = icons.map(async (icon) => {
		return await generate_jsdoc_preview(icon.content);
	});

	const content = await Promise.all(promises).then((icons) => icons.join('\n\n'));

	await fs.writeFile(
		path.join(workspace_root, 'assets/icons.md'),
		await format_html(template.replace('%content%', content)),
		{encoding: 'utf-8'},
	);
}

await generate_icons_readme();
