import fs from 'fs';
import path from 'path';
import svgson from 'svgson';
import {format_ts} from '../utils/formatter.mjs';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_clean_dir} from './create-clean-dir.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';

const outdir = path.join(get_workspace_root(), 'packages/icons/react/src');

export function generate_icons_react() {
  create_clean_dir(outdir);

  const items = get_icons().map((icon) => {
    const component = to_react_component(icon);
    const destination = path.join(outdir, `${icon.name.pascal}.tsx`);

    fs.writeFileSync(destination, format_ts(component), {encoding: 'utf-8'});

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

const REF = 'REF';
const CLASSNAME = 'CLASSNAME';
const REST_PROPS = 'REST_PROPS';

/**
 * @param {import('../utils/get-icons.mjs').Icon} icon
 */
function to_react_component(icon) {
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
        const cls = `"untitled-icon ${icon.name.kebab}"`;

        return `className={cx(${cls}, className)}`;
      }

      if (key === REST_PROPS) {
        return '{...props}';
      }

      return `${key}="${esc(value)}"`;
    },
  });

  const react_component = template({
    name: icon.name.pascal,
    html: react_svg,
    comment: generate_jsdoc_preview(icon.html),
  });

  return react_component;
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
		import * as React from 'react';

		/**
		 * ${config.comment}
		 */
		const ${config.name} = React.forwardRef<
      SVGSVGElement,
      React.SVGProps<SVGSVGElement>
    >(({className, ...props}, ref) => {
			return ${config.html};
		});

    const cx = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

		${config.name}.displayName = '${config.name}'

		export default ${config.name};
	`;
}
