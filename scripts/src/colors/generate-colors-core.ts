import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {colors} from './colors.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src');

export async function generateColorsCore() {
	try {
		await fs.mkdir(outdir, {recursive: true});
	} catch {}

	const content = `const colors = ${JSON.stringify(colors, null, 2)};\nexport default colors;`;
	const destination = path.join(outdir, 'index.ts');

	await fs.writeFile(destination, content, 'utf-8');
}
