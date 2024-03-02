import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {get_icons} from '../utils/get-icons.mjs';
import {get_workspace_root} from '../utils/get-workspace-root.mjs';
import {create_barrel_file} from './create-barrel-file.mjs';
import {create_clean_dir} from './create-clean-dir.mjs';
import {generate_jsdoc_preview} from './generate-jsdoc-preview.mjs';

const outdir = path.join(get_workspace_root(), 'packages/icons/svelte/src');

export async function generate_icons_svelte() {
  await create_clean_dir(outdir);

  const icons = await get_icons();
  const promises = icons.map(async (icon) => {
    const component = await to_svelte_component(icon);
    const destination = path.join(outdir, `${icon.name.pascal}.svelte`);

    await fs.writeFile(destination, component, 'utf-8');

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

  const items = await Promise.all(promises);

  await create_barrel_file(outdir, items);
}

const CLASSNAME = 'CLASSNAME';
const REST_PROPS = 'REST_PROPS';

/**
 * @param {import('../utils/get-icons.mjs').Icon} icon
 */
async function to_svelte_component(icon) {
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
        return `class={className}`;
      }

      if (key === REST_PROPS) {
        return '{...props}';
      }

      return `${key}="${esc(value)}"`;
    },
  });

  return template
    .replaceAll('%name%', icon.name.pascal)
    .replaceAll('%html%', svelte_svg)
    .replaceAll('%comment%', await generate_jsdoc_preview(icon.html))
    .replaceAll('%class%', 'lucide-icon ' + icon.name.kebab);
}

const template = `
<script lang="ts">
  import type {SVGAttributes} from 'svelte/elements';

  const cx = (...args: (string | null | undefined)[]) => args.filter(Boolean).join(' ');
  
  let {class: classProp, ...props} = $props<SVGAttributes<SVGSVGElement>>(); 
  let className = $derived(cx('%class%', classProp)); 
</script>

<!-- @component %comment% -->

%html%`;
