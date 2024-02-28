import fs from 'fs/promises';
import {unstable_cache as cache} from 'next/cache';
import path from 'path';
import * as svgson from 'svgson';
import type {Icon} from './types';

export const getIcons = cache(async () => {
  const root = path.resolve(process.cwd(), '../assets/icons');
  const files = await fs.readdir(root, 'utf-8');

  const promises = files.map<Promise<Icon>>(async (fileName) => {
    const parsedPath = path.parse(fileName);
    const displayName = dashToPascal(parsedPath.name) + 'Icon';

    const fullPath = path.join(root, fileName);
    const fileContent = await fs.readFile(fullPath, 'utf-8');

    const parsed = await svgson.parse(fileContent, {
      transformNode(node) {
        if (node.name === 'svg') {
          node.attributes['width'] = '32';
          node.attributes['height'] = '32';
        }

        return node;
      },
    });

    const content = svgson.stringify(parsed, {
      selfClose: true,
      transformAttr(key, value, escape) {
        if (key === 'stroke') return `${key}="currentColor"`;
        if (key === 'stroke-width') return `${key}="1.5"`;
        return `${key}="${escape(value)}"`;
      },
    });

    return {
      displayName,
      content,
      meta: {
        fullPath,
        fileName,
      },
    };
  });

  return await Promise.all(promises);
}, ['items']);

function dashToPascal(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}
