import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {getColors} from './get-colors.js';

async function generateWebsiteAsset() {
	const content = await getContent();
	const destination = path.join(getWorkspaceRoot(), 'website/src/assets/colors.json');

	await fs.writeFile(destination, content, 'utf-8');
}

async function getContent() {
	return JSON.stringify(await getColors());
}

generateWebsiteAsset();
