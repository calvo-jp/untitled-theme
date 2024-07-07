import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import colors from './colors.json';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src/panda');

export async function generateColorsPanda() {
	await fs.mkdir(outdir, {recursive: true});

	const content = `const colors = ${JSON.stringify(getColors(), null, 2)};\nexport default colors;`;
	const destination = path.join(outdir, 'index.ts');

	await fs.writeFile(destination, content, 'utf-8');
}

function getColors() {
	const result: Record<string, {value: string} | Record<string, {value: string}>> = {};

	Object.entries(colors).forEach(([k1, v1]) => {
		if (typeof v1 === 'string') {
			result[k1] = {value: v1};
		} else {
			Object.entries(v1).forEach(([k2, v2]) => {
				const prev = result[k1] ? result[k1] : {};

				result[k1] = {
					...prev,

					[k2]: {
						value: v2,
					},
				};
			});
		}
	});

	return result;
}
