import fs from 'fs';
import path from 'path';
import svgson from 'svgson';
import {format_html} from '../utils/formatter.mjs';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_clean_dir} from './create-clean-dir.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';

const outdir = path.join(get_workspace_root(), 'packages/icons/svelte/src');

export function generate_icons_svelte() {
  create_clean_dir(outdir);

  const items = get_icons().map((icon) => {
    const component = to_svelte_component(icon);
    const destination = path.join(outdir, `${icon.name.pascal}.svelte`);

    fs.writeFileSync(destination, format_html(component), {encoding: 'utf-8'});

    /**
     * @type {import('./create-barrel-file.mjs').BarrelItem}
     */
    const item = {
      path: `./${icon.name.pascal}.svelte`,
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
function to_svelte_component(icon) {
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

  const svelte_svg = svgson.stringify(node, {
    selfClose: true,
    transformAttr(key, value, esc) {
      if (key === CLASSNAME) {
        return `class="{className}"`;
      }

      if (key === REST_PROPS) {
        return '{...props}';
      }

      return `${key}="${esc(value)}"`;
    },
  });

  const svelte_component = template({
    html: svelte_svg,
    comment: generate_jsdoc_preview(icon.html),
    props: {
      class: `untitled-icon ${icon.name.kebab}`,
    },
  });

  return svelte_component;
}

/**
 * @typedef TemplateConfig
 * @property {string} html
 * @property {Record<string, any>} [props]
 * @property {string} [comment]
 */

/**
 * @param {TemplateConfig} config
 */
function template(config) {
  const classProps = config.props?.class ?? '';

  return `
    <script lang="ts">
      import type {SVGAttributes} from 'svelte/elements';

      const cx = (...args: (string | null | undefined)[]) => args.filter(Boolean).join(' ');
      
			let {class: classProp, ...props} = $props<SVGAttributes<SVGSVGElement>>(); 
      let className = $derived(cx('${classProps}', classProp)); 
		</script>

		<!-- @component ${config.comment} -->

		${config.html}
	`;
}
