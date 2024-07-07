import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import colors from './colors.json';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src/css');

export async function generateColorsVanilla() {
	try {
		await fs.mkdir(outdir, {recursive: true});
	} catch {}

	const content = `:root {\n${getColors()}}`;
	const destination = path.join(outdir, 'index.css');

	await fs.writeFile(destination, content, 'utf-8');
}

function getColors() {
	let result = '';

	Object.entries(colors).forEach(([k1, v1]) => {
		if (typeof v1 === 'string') {
			result += `\t--colors-${k1}: ${v1};\n`;
		} else {
			Object.entries(v1).forEach(([k2, v2]) => {
				result += `\t--colors-${k1}-${k2}: ${v2};\n`;
			});
		}
	});

	return result;
}
