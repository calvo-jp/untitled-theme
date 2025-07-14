import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {getColors} from './get-colors.js';

async function generateWebsiteAsset() {
	const content = await getContent();
	const destination = path.join(
		getWorkspaceRoot(),
		'website/src/lib/assets/colors.json',
	);

	await fs.writeFile(destination, content, 'utf-8');
}

async function getContent() {
	const colors = await getColors();

	const ignored = [
		/**/
		'white',
		'black',
		'transparent',
	];

	ignored.forEach((k) => {
		delete colors[k];
	});

	return JSON.stringify(colors);
}

generateWebsiteAsset();
