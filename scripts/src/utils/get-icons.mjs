import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {get_workspace_root} from './get-workspace-root.mjs';

/**
 * @typedef {Object} Name
 * @property {string} formal _ie_ `Rocket 01 Icon`
 * @property {string} pascal _ie_ `Rocket01Icon`
 * @property {string} kebab _ie_ `rocket-01-icon`
 */

/**
 * @typedef {Object} Icon
 * @property {string} slug file unique identifier
 * @property {string} html the content of the file
 * @property {Name} name
 */

const assets_dir = path.join(get_workspace_root(), 'assets/icons');

/** @type {Icon[]|null} */
let previously_loaded_icons = null;

export async function get_icons() {
  if (previously_loaded_icons) return previously_loaded_icons;

  const filenames = await fs.readdir(assets_dir, 'utf-8');
  const promises = filenames
    .filter((filename) => filename.endsWith('svg'))
    .map(async (filename) => {
      const {name, base} = path.parse(filename);
      const location = path.join(assets_dir, base);

      /** @type {string} */
      let content = '';

      content = await fs.readFile(location, 'utf-8');
      content = svgson.stringify(await svgson.parse(content), {
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

      /** @type {Icon} */
      const o = {
        slug: name,
        html: content,
        name: {
          kebab: `${name}-icon`,
          formal: [...name.split(/-/g), 'icon'].map(uc_first).join(' '),
          pascal: [...name.split(/-/g), 'icon'].map(uc_first).join(''),
        },
      };

      return o;
    });

  const icons = await Promise.all(promises);

  previously_loaded_icons = icons;

  return icons;
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
