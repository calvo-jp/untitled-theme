import fs from 'node:fs';
import path from 'node:path';
import svgson from 'svgson';
import {get_workspace_root} from './get-workspace-root.mjs';

/**
 * @typedef {Object} Name
 * @property {string} formal
 * @property {string} pascal
 * @property {string} kebab
 
 */

/**
 * @typedef {Object} Icon
 * @property {string} slug file unique identifier
 * @property {string} path the location of the file
 * @property {string} html the content of the file
 * @property {Name} name
 */

const assets_dir = path.join(get_workspace_root(), 'assets/icons');

/** @type {Icon[]|null} */
let icons = null;

export function get_icons() {
  if (icons) return icons;

  const filenames = fs.readdirSync(assets_dir, {encoding: 'utf-8'});

  /** @type {Icon[]} */
  let l = filenames
    .filter((filename) => filename.endsWith('svg'))
    .map((filename) => {
      const {name, base} = path.parse(filename);
      const location = path.join(assets_dir, base);

      /** @type {string} */
      let content = '';

      content = fs.readFileSync(location, {encoding: 'utf-8'});
      content = svgson.stringify(svgson.parseSync(content), {
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
      });

      return {
        slug: name,
        html: content,
        path: location,
        name: {
          kebab: `${name}-icon`,
          formal: [...name.split(/-/g), 'icon'].map(uc_first).join(' '),
          pascal: [...name.split(/-/g), 'icon'].map(uc_first).join(''),
        },
      };
    });

  icons = l;
  return l;
}

/**
 * @param {string} word
 */
function uc_first(word) {
  return word[0].toUpperCase().concat(word.substring(1));
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
