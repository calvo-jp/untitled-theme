import {SearchLgIcon} from '@untitled-theme/icons-react';
import fs from 'fs/promises';
import path from 'path';
import * as svgson from 'svgson';

export default async function Landing() {
  const items = await getItems();

  return (
    <div>
      <div className="relative">
        <input
          placeholder="Search"
          className="w-full px-4 py-2 h-12 border border-gray-true-200 rounded outline-none placeholder:text-gray-true-400"
        />
        <SearchLgIcon className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-4 stroke-[1.5]" />
      </div>

      <div className="grid grid-cols-12 gap-2 mt-8">
        {items.map((item) => {
          return (
            <button
              key={item.name}
              type="button"
              dangerouslySetInnerHTML={{
                __html: item.html,
              }}
              className="aspect-square border text-gray-true-700 border-gray-true-200 flex items-center justify-center p-2 rounded"
              aria-label={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

async function getItems() {
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
    };
  });

  return await Promise.all(promises);
}

function dashToPascal(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}
