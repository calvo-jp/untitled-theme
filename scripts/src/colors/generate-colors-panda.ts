import fs from 'node:fs/promises';
import path from 'node:path';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {flatten, unflatten} from './flatten.js';
import {getColors} from './get-colors.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/core/colors/src/panda');

export async function generateColorsPanda() {
  try {
    await fs.mkdir(outdir, {recursive: true});
  } catch {}

  const content = await getContent();
  const destination = path.join(outdir, 'index.ts');

  await fs.writeFile(destination, content, 'utf-8');
}

async function getContent() {
  const colors = await getColors();
  const result = unflatten(
    flatten(colors).map(({keys, value}) => {
      return {
        keys,
        value: {value},
      };
    }),
  );

  return `const colors = ${JSON.stringify(result, null, 2)};\nexport default colors;`;
}
