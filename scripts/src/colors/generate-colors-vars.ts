import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import colors from './colors.json';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src/vars');

export async function generateColorsVars() {
	await fs.mkdir(outdir, {recursive: true});

	const content = `const colors = ${JSON.stringify(getColors(), null, 2)};\nexport default colors;`;
	const destination = path.join(outdir, 'index.ts');

	await fs.writeFile(destination, content, 'utf-8');
}

function getColors() {
	const result: Record<string, string> = {};

	Object.entries(colors).forEach(([k1, v1]) => {
		if (typeof v1 === 'string') {
			result[`--${k1}`] = v1;
		} else {
			Object.entries(v1).forEach(([k2, v2]) => {
				result[`--${k1}-${k2}`] = v2;
			});
		}
	});

	return result;
}
