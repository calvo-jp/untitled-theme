import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {flatten} from './flatten.js';
import {getColors} from './get-colors.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src/vars');

export async function generateColorsVars() {
  try {
    await fs.mkdir(outdir, {recursive: true});
  } catch {}

  const content = await getContent();
  const destination = path.join(outdir, 'index.ts');

  await fs.writeFile(destination, content, 'utf-8');
}

async function getContent() {
  const content: Record<string, string> = {};

  flatten(await getColors()).forEach(({keys, value}) => {
    const key = `--colors-${keys.join('-')}`;
    content[key] = value;
  });

  return `const colors = ${JSON.stringify(content, null, 2)};\nexport default colors;`;
}
