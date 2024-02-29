import {dashToPascal} from '@/lib/dash-to-pascal';
import type {Icon} from '@/types';
import fs from 'fs/promises';
import {unstable_cache as cache} from 'next/cache';
import path from 'path';
import * as svgson from 'svgson';

export const getIcons = cache(
  async ({search}: {search?: string}) => {
    const root = path.resolve(process.cwd(), '../assets/icons');
    const files = await fs.readdir(root, 'utf-8');

    const promises = files.map<Promise<Icon>>(async (fileName) => {
      const content = await fs.readFile(path.join(root, fileName), 'utf-8');
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
          if (key === 'stroke') return `${key}="currentColor"`;
          if (key === 'stroke-width') return `${key}="1.5"`;
          return `${key}="${escape(value)}"`;
        },
      });

      const slug = path.parse(fileName).name;
      const name = dashToPascal(slug) + 'Icon';

      return {
        slug,
        name,
        html,
      };
    });

    return await Promise.all(promises).then((array) => {
      if (!search) return array;

      return array.filter((item) =>
        item.name.toLowerCase().replace(/ /g, '').includes(search.toLowerCase().replace(/ /g, '')),
      );
    });
  },
  ['icons'],
);
