import fs from 'fs/promises';
import path from 'path';
import * as svgson from 'svgson';
import {Item} from './types';

export async function getItems() {
  const root = path.resolve(process.cwd(), '../assets/icons');
  const filenames = await fs.readdir(root, 'utf-8');
  const promises = filenames.map(async (filename) => {
    const name = dashToPascal(path.parse(filename).name);
    const content = await fs.readFile(path.join(root, filename), 'utf-8');
    const parsed = await svgson.parse(content, {
      transformNode(node) {
        if (node.name === 'svg') {
          node.attributes['width'] = '32';
          node.attributes['height'] = '32';
        }

        return node;
      },
    });

    const html = svgson.stringify(parsed, {
      selfClose: true,
      transformAttr(key, value, escape) {
        if (key === 'stroke') {
          return `${key}="currentColor"`;
        }

        if (key === 'stroke-width') {
          return `${key}="1.5"`;
        }

        return `${key}="${escape(value)}"`;
      },
    });

    return {
      name,
      html,
    } satisfies Item;
  });

  return await Promise.all(promises);
}

function dashToPascal(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}
