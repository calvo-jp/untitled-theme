// @ts-check

import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {dash_to_pascal} from '../utils/dash-to-pascal.mjs';
import {format_json} from '../utils/formatter.mjs';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';

/**
 * @typedef {Object} Data
 * @property {string} slug
 * @property {string} name
 * @property {string} html
 */

async function generate_database() {
  const icons = await get_icons();

  /**
   * @type {Data[]}
   */
  const items = icons.map((icon) => {
    const parsed = svgson.parseSync(icon.content, {
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

    return {
      html,
      name: dash_to_pascal(icon.filename),
      slug: icon.filename,
    };
  });

  await fs.writeFile(
    path.join(get_workspace_root(), 'website/src/app/database.json'),
    await format_json(JSON.stringify(items)),
    {
      encoding: 'utf-8',
    },
  );
}

generate_database();
