import * as p from '@clack/prompts';
import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {getIcons} from '../utils/get-icons.js';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';

async function generateDatabase() {
	p.intro('Generating database');

	const spinner = p.spinner();

	spinner.start('Fetching icons');
	const icons = await getIcons();

	spinner.message('Creating database content');
	const promises = icons.map(async (icon) => {
		return {
			...icon,

			html: svgson.stringify(await svgson.parse(icon.html), {
				transformNode(node) {
					if (node.name === 'svg') {
						node.attributes.width = '32';
						node.attributes.height = '32';
						node.attributes['stroke-width'] = '1.5';
					}

					return node;
				},
			}),
		};
	});

	const items = await Promise.all(promises);
	const outputFile = path.join(getWorkspaceRoot(), 'website/src/app/database.json');

	spinner.message("Generating 'database.json'");
	await fs.writeFile(outputFile, JSON.stringify(items), 'utf-8');

	spinner.stop();
	p.outro('Database generated successfully!');
}

generateDatabase();
