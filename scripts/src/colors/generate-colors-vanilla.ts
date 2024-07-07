import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import colors from './colors.json';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src/css');

export async function generateColorsVanilla() {
	await fs.mkdir(outdir, {recursive: true});

	const content = `:root {\n${getColors()}\n}`;
	const destination = path.join(outdir, 'index.css');

	await fs.writeFile(destination, content, 'utf-8');
}

function getColors() {
	let result = '';

	Object.entries(colors).forEach(([k1, v1]) => {
		if (typeof v1 === 'string') {
			result += `--${k1}: ${v1};\n`;
		} else {
			Object.entries(v1).forEach(([k2, v2]) => {
				result += `--${k1}-${k2}: ${v2};\n`;
			});
		}
	});

	return result;
}
