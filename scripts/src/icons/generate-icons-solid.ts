import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {formatTypescript} from '../utils/formatter.js';
import {getIcons, type Icon} from '../utils/get-icons.js';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {createBarrelFile, type BarrelItem} from './create-barrel-file.js';
import {createCleanDir} from './create-clean-dir.js';
import {generateJsdocPreview} from './generate-jsdoc-preview.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/icons/solid/src');

export async function generateIconsSolid() {
	await createCleanDir(outdir);

	const icons = await getIcons();
	const promises = icons.map(async (icon) => {
		const component = await toSolidComponent(icon);
		const destination = path.join(outdir, `${icon.name.pascal}.tsx`);

		await fs.writeFile(destination, await formatTypescript(component), 'utf-8');

		const item: BarrelItem = {
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

	await createBarrelFile(outdir, items);
}

const CLASSNAME = 'CLASSNAME';
const REST_PROPS = 'REST_PROPS';

async function toSolidComponent(icon: Icon) {
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

	const solidSvg = svgson.stringify(node, {
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
		.replaceAll('%html%', solidSvg)
		.replaceAll('%comment%', await generateJsdocPreview(icon.html));
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
