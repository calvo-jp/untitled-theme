import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {format_json} from '../utils/formatter.mjs';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';

async function generate_database() {
  const icons = await get_icons();
  const promises = icons.map(async (icon) => {
    return {
      ...icon,

      html: svgson.stringify(await svgson.parse(icon.html), {
        transformNode(node) {
          if (node.name === 'svg') {
            node.attributes['width'] = '32';
            node.attributes['height'] = '32';
            node.attributes['stroke-width'] = '1.5';
          }

          return node;
        },
      }),
    };
  });

  const items = await Promise.all(promises);
  const output_file = path.join(get_workspace_root(), 'website/src/app/database.json');

  await fs.writeFile(output_file, await format_json(JSON.stringify(items)), 'utf-8');
}

generate_database();
