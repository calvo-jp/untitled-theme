import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {dash_to_pascal} from '../utils/dash-to-pascal.mjs';
import {format_html} from '../utils/formatter.mjs';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';
import {config} from './config.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_clean_dir} from './create-clean-dir.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';

const outdir = path.join(get_workspace_root(), 'packages/icons/svelte/src');

export async function generate_icons_svelte() {
  const icons = await get_icons();

  await create_clean_dir(outdir);

  const items = await Promise.all(
    icons.map(async (icon) => {
      const Component = await to_svelte_component(icon);
      const destination = path.join(outdir, `${icon.filename}.svelte`);

      await fs.writeFile(destination, await format_html(Component.content), {encoding: 'utf-8'});

      /**
       * @type {import('./create-barrel-file.mjs').BarrelItem}
       */
      const item = {
        path: `./${icon.filename}.svelte`,
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

const REST = 'REST';

/**
 * @param {import('../utils/get-icons.mjs').Icon} icon
 */
async function to_svelte_component(icon) {
  const node = await svgson.parse(icon.content, {
    transformNode(node) {
      if (node.name === 'svg') {
        return {
          ...node,
          attributes: {
            ...node.attributes,
            width: config.width,
            height: config.height,
            viewBox: config.viewBox,
            class: config.className,
            'aria-hidden': config.ariaHidden,
            [REST]: '',
          },
        };
      }

      return node;
    },
  });

  const svelte_svg = svgson.stringify(node, {
    selfClose: true,
    transformAttr(key, value, esc) {
      if (key === REST) {
        return '{...props}';
      } else if (key === 'stroke') {
        return `${key}="${config.stroke}"`;
      } else if (key === 'stroke-width') {
        return `${key}="${config.strokeWidth}"`;
      } else if (key === 'class') {
        return `${key}="{class_}"`;
      } else {
        return `${key}="${esc(value)}"`;
      }
    },
  });

  const component_name = `${dash_to_pascal(icon.filename)}Icon`;

  const svelte_component = template({
    content: svelte_svg,
    jsdoc: await generate_jsdoc_preview(icon.content),
    props: {
      class: `${icon.filename}-icon`,
    },
  });

  return {
    name: component_name,
    content: svelte_component,
  };
}

/**
 * @typedef TemplateConfig
 * @property {string} content
 * @property {string} [jsdoc]
 * @property {Record<string,any>} [props]
 */

/**
 * @param {TemplateConfig} config
 */
function template(config) {
  const classProps = config.props?.class ?? '';

  return `
		<script lang="ts">
			import type {SVGAttributes} from 'svelte/elements';
      
      const cx = (...classes: (string | null | undefined)[]) => classes.filter(Boolean).join(' ');

			let {class: classProp, ...props} = $props<SVGAttributes<SVGSVGElement>>(); 
      let class_ = $derived(cx('${`untitled-icon ${classProps}`.trim()}', classProp)); 
		</script>

		<!-- @component ${config.jsdoc} -->

		${config.content}
	`;
}
