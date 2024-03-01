import fs from 'fs';
import path from 'path';
import svgson from 'svgson';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';

function generate_database() {
  const items = get_icons().map((icon) => {
    return {
      ...icon,

      html: svgson.stringify(svgson.parseSync(icon.html), {
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

  const out_file = path.join(get_workspace_root(), 'website/src/app/database.json');

  fs.writeFileSync(out_file, JSON.stringify(items, null, 2), 'utf-8');
}

generate_database();
