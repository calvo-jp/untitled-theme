import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {get_workspace_root} from './get-workspace-root.mjs';

/**
 * @typedef {Object} Icon
 * @property {string} fullpath
 * @property {string} basename
 * @property {string} filename
 * @property {string} extension
 * @property {string} content
 */

const assets_dir = path.join(get_workspace_root(), 'assets/icons');

/** @type {Icon[]|null} */
let icons = null;

export async function get_icons() {
  if (icons) return icons;

  const filenames = await fs.readdir(assets_dir, {encoding: 'utf-8'});

  /** @type {Icon[]} */
  let l = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith('svg'))
      .map(async (filename) => {
        const details = path.parse(filename);
        const fullpath = path.join(assets_dir, filename);
        const content = await fs.readFile(fullpath, {encoding: 'utf-8'});

        return {
          content: svgson.stringify(svgson.parseSync(content), {
            transformNode(node) {
              if (node.name === 'svg') {
                return {
                  ...node,
                  attributes: {
                    ...node.attributes,
                    ...svg_attrs,
                  },
                };
              }

              return {
                ...node,
                attributes: remove_svg_attrs(node.attributes),
              };
            },
          }),
          fullpath,
          basename: details.base,
          filename: details.name,
          extension: details.ext,
        };
      }),
  );

  icons = l;
  return l;
}

/**
 * @type {Record<string, string>}
 */
const svg_attrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};

/**
 * @param {Record<string, string>} o
 */
function remove_svg_attrs(o) {
  const c = {...o};

  for (const k in o) {
    if (svg_attrs[k]) {
      delete c[k];
    }
  }

  return c;
}
