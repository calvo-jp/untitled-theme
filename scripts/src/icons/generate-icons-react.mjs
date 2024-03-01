import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {dash_to_pascal} from '../utils/dash-to-pascal.mjs';
import {format_ts} from '../utils/formatter.mjs';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';
import {config} from './config.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_clean_dir} from './create-clean-dir.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';

const outdir = path.join(get_workspace_root(), 'packages/icons/react/src');

export async function generate_icons_react() {
  const icons = await get_icons();

  await create_clean_dir(outdir);

  const items = await Promise.all(
    icons.map(async (icon) => {
      const Component = await to_react_component(icon);
      const destination = path.join(outdir, `${Component.name}.tsx`);

      await fs.writeFile(destination, await format_ts(Component.content), {encoding: 'utf-8'});

      /**
       * @type {import('./create-barrel-file.mjs').BarrelItem}
       */
      const item = {
        path: `./${Component.name}.tsx`,
        modules: [
          {
            name: 'default',
            as: Component.name,
          },
        ],
      };

      return item;
    }),
  );

  await create_barrel_file(outdir, items);
}

const REF = 'REF';
const REST = 'REST';

/**
 * @param {import('../utils/get-icons.mjs').Icon} icon
 */
async function to_react_component(icon) {
  const node = await svgson.parse(icon.content, {
    camelcase: true,
    transformNode(node) {
      if (node.name === 'svg') {
        return {
          ...node,
          attributes: {
            [REF]: '',
            ...node.attributes,
            width: config.width,
            height: config.height,
            viewBox: config.viewBox,
            className: config.className,
            ['aria-hidden']: config.ariaHidden,
            [REST]: '',
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
      } else if (key === REST) {
        return '{...props}';
      } else if (key === 'stroke') {
        return `${key}="${config.stroke}"`;
      } else if (key === 'strokeWidth') {
        return `${key}="${config.strokeWidth}"`;
      } else if (key === 'className') {
        const classes = `${config.className} ${icon.filename}-icon`;

        return `${key}={\`${classes} \${className}\`.trim()}`;
      } else {
        return `${key}="${esc(value)}"`;
      }
    },
  });

  const component_name = `${dash_to_pascal(icon.filename)}Icon`;

  const react_component = template({
    name: component_name,
    content: react_svg,
    jsdoc: await generate_jsdoc_preview(icon.content),
  });

  return {
    name: component_name,
    content: react_component,
  };
}

/**
 * @typedef TemplateConfig
 * @property {string} name
 * @property {string} content
 * @property {string} [jsdoc]
 *
 */

/**
 * @param {TemplateConfig} config
 * @returns {string}
 */
function template(config) {
  return `
		import * as React from 'react';

		/**
		 * ${config.jsdoc}
		 */
		const ${config.name} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(({className="", ...props}, ref) => {
			return ${config.content};
		});

		${config.name}.displayName = '${config.name}'

		export default ${config.name};
	`;
}
