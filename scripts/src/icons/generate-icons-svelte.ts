import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {createBarrelFile, type BarrelItem} from './create-barrel-file.js';
import {createCleanDir} from './create-clean-dir.js';
import {generateJsdocPreview} from './generate-jsdoc-preview.js';
import {getIcons, type Icon} from './get-icons.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/icons/svelte/src');

export async function generateIconsSvelte() {
	await createCleanDir(outdir);

	const icons = await getIcons();
	const promises = icons.map(async (icon) => {
		const component = await toSvelteComponent(icon);
		const destination = path.join(outdir, `${icon.name.pascal}.svelte`);

		await fs.writeFile(destination, component, 'utf-8');

		const item: BarrelItem = {
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

	await createBarrelFile(outdir, items);
}

const CLASSNAME = 'CLASSNAME';
const REST_PROPS = 'REST_PROPS';

async function toSvelteComponent(icon: Icon) {
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

	const svelteSvg = svgson.stringify(node, {
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

	return template
		.replaceAll('%name%', icon.name.pascal)
		.replaceAll('%html%', svelteSvg)
		.replaceAll('%comment%', await generateJsdocPreview(icon.html))
		.replaceAll('%class%', `lucide-icon ${icon.name.kebab}`);
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
