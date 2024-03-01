import fs from 'fs';
import path from 'path';
import svgson from 'svgson';
import {format_ts} from '../utils/formatter.mjs';
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

    fs.writeFileSync(destination, format_ts(component), 'utf8');

    /**
     * @type {import('./create-barrel-file.mjs').BarrelItem}
     */
    const item = {
      path: `./${icon.name.pascal}.tsx`,
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
    camelcase: true,
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
        return `class={cx("untitled-icon ${icon.name.kebab}", local.className)}`;
      }

      if (key === REST_PROPS) {
        return '{...others}';
      }

      return `${key}="${esc(value)}"`;
    },
  });

  const solid_component = template({
    name: icon.name.pascal,
    html: solid_svg,
    comment: generate_jsdoc_preview(icon.html),
  });

  return solid_component;
}

/**
 * @typedef TemplateConfig
 * @property {string} name
 * @property {string} html
 * @property {string} [comment]
 */

/**
 * @param {TemplateConfig} config
 * @returns {string}
 */
function template(config) {
  return `
		/**
		 * ${config.comment}
		 */
		const ${config.name} = ((props) => {
      const [local, others] = splitProps(props, ['className']);
      
			return ${config.html};
		});

    const cx = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

		export default ${config.name};
	`;
}
