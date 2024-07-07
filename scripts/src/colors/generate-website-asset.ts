import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {colors} from './colors.js';

async function generateWebsiteAsset() {
	const content = JSON.stringify(getColors());
	const destination = path.join(getWorkspaceRoot(), 'website/src/assets/colors.json');

	await fs.writeFile(destination, content, 'utf-8');
}

function getColors() {
	const o: Record<string, Record<string, string> | string> = {...colors};

	for (const k in o) {
		if (typeof o[k] === 'string') {
			delete o[k];
		}
	}

	return o;
}

generateWebsiteAsset();
