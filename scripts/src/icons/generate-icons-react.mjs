import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_clean_dir} from './create-clean-dir.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';

const outdir = path.join(get_workspace_root(), 'packages/icons/react/src');

export async function generate_icons_react() {
  await create_clean_dir(outdir);

  const icons = await get_icons();
  const promises = icons.map(async (icon) => {
    const component = await to_react_component(icon);
    const destination = path.join(outdir, `${icon.name.pascal}.tsx`);

    await fs.writeFile(destination, component, 'utf-8');

    /**
     * @type {import('./create-barrel-file.mjs').BarrelItem}
     */
    const item = {
      path: `./${icon.name.pascal}`,
      modules: [
        {
          name: 'default',
          as: icon.name.pascal,
        },
      ],
    };

    return item;
  });

  const items = await Promise.all(promises);

  await create_barrel_file(outdir, items);
}

const REF = 'REF';
const CLASSNAME = 'CLASSNAME';
const REST_PROPS = 'REST_PROPS';

/**
 * @param {import('../utils/get-icons.mjs').Icon} icon
 */
async function to_react_component(icon) {
  const node = svgson.parseSync(icon.html, {
    camelcase: true,
    transformNode(node) {
      if (node.name === 'svg') {
        return {
          ...node,

          attributes: {
            [REF]: '',

            ...node.attributes,

            [CLASSNAME]: '',
            [REST_PROPS]: '',
          },
        };
      }

      return node;
    },
  });

  const react_svg = svgson.stringify(node, {
    selfClose: true,
    transformAttr(key, value, esc) {
      if (key === REF) {
        return 'ref={ref}';
      }

      if (key === CLASSNAME) {
        return `className={cx("untitled-icon ${icon.name.kebab}", className)}`;
      }

      if (key === REST_PROPS) {
        return '{...props}';
      }

      return `${key}="${esc(value)}"`;
    },
  });

  return template
    .replaceAll('%name%', icon.name.pascal)
    .replaceAll('%html%', react_svg)
    .replaceAll('%comment%', await generate_jsdoc_preview(icon.html));
}

const template = `
import * as React from 'react';

/**
 * %comment%
 */
const %name% = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({className, ...props}, ref) => {
  return %html%;
});

const cx = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

%name%.displayName = '%name%'

export default %name%;
`;
