import fs from 'fs';
import path from 'path';
import svgson from 'svgson';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_clean_dir} from './create-clean-dir.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';

const outdir = path.join(get_workspace_root(), 'packages/icons/solid/src');

export function generate_icons_solid() {
  create_clean_dir(outdir);

  const items = get_icons().map((icon) => {
    const component = to_solid_component(icon);
    const destination = path.join(outdir, `${icon.name.pascal}.tsx`);

    fs.writeFileSync(destination, component, 'utf-8');

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

  create_barrel_file(outdir, items);
}

const CLASSNAME = 'CLASSNAME';
const REST_PROPS = 'REST_PROPS';

/**
 * @param {import('../utils/get-icons.mjs').Icon} icon
 */
function to_solid_component(icon) {
  const node = svgson.parseSync(icon.html, {
    transformNode(node) {
      if (node.name === 'svg') {
        return {
          ...node,

          attributes: {
            ...node.attributes,

            [CLASSNAME]: '',
            [REST_PROPS]: '',
          },
        };
      }

      return node;
    },
  });

  const solid_svg = svgson.stringify(node, {
    selfClose: true,
    transformAttr(key, value, esc) {
      if (key === CLASSNAME) {
        return `class={cx("untitled-icon ${icon.name.kebab}", local.class)}`;
      }

      if (key === REST_PROPS) {
        return '{...others}';
      }

      return `${key}="${esc(value)}"`;
    },
  });

  return template
    .replaceAll('%name%', icon.name.pascal)
    .replaceAll('%html%', solid_svg)
    .replaceAll('%comment%', generate_jsdoc_preview(icon.html));
}

const template = `
import {splitProps, type ComponentProps} from 'solid-js';

/**
 * %comment%
 */
export default function %name%(props: ComponentProps<'svg'>) {
  const [local, others] = splitProps(props, ['class']);

  return %html%;
}

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ');
`;
