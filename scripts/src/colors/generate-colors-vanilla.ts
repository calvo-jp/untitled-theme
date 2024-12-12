import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {flatten} from './flatten.js';
import {getColors} from './get-colors.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src/css');

export async function generateColorsVanilla() {
  try {
    await fs.mkdir(outdir, {recursive: true});
  } catch {}

  const content = await getContent();
  const destination = path.join(outdir, 'index.css');

  await fs.writeFile(destination, content, 'utf-8');
}

async function getContent() {
  let content = '';

  flatten(await getColors()).forEach(({keys, value}) => {
    content += `\t--colors-${keys.join('-')}: ${value};\n`;
  });

  return `:root {\n${content}}`;
}
