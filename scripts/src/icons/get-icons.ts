import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {optimize} from 'svgo';

interface Name {
  formal: string;
  pascal: string;
  kebab: string;
}

export interface Icon {
  slug: string;
  html: string;
  name: Name;
}

const assetsDir = path.join(getWorkspaceRoot(), 'assets/icons');

let previouslyLoadedIcons: Icon[] | null = null;

export async function getIcons() {
  if (previouslyLoadedIcons) return previouslyLoadedIcons;

  const filenames = await fs.readdir(assetsDir, 'utf-8');
  const promises = filenames
    .filter((filename) => filename.endsWith('svg'))
    .map(async (filename) => {
      const {name, base} = path.parse(filename);
      const location = path.join(assetsDir, base);

      let content = '';

      content = await fs.readFile(location, 'utf-8');
      content = optimize(content).data;
      content = svgson.stringify(await svgson.parse(content), {
        transformNode(node) {
          if (node.name === 'svg') {
            return {
              ...node,
              attributes: {
                ...node.attributes,
                ...svgAttrs,
              },
            };
          }

          return {
            ...node,
            attributes: removeSvgAttrs(node.attributes),
          };
        },
      });

      const o: Icon = {
        slug: name,
        html: content,
        name: {
          kebab: `${name}-icon`,
          formal: [...name.split(/-/g), 'icon'].map(ucFirst).join(' '),
          pascal: [...name.split(/-/g), 'icon'].map(ucFirst).join(''),
        },
      };

      return o;
    });

  const icons = await Promise.all(promises);

  previouslyLoadedIcons = icons;

  return icons;
}

function ucFirst(word: string) {
  return word[0].toUpperCase().concat(word.substring(1));
}

const svgAttrs: Record<string, string> = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};

function removeSvgAttrs(o: Record<string, string>) {
  const c = {...o};

  for (const k in o) {
    if (svgAttrs[k]) {
      delete c[k];
    }
  }

  return c;
}
