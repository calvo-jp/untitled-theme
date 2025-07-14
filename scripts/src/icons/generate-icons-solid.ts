import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {type BarrelItem, createBarrelFile} from './create-barrel-file.js';
import {generateJsdocPreview} from './generate-jsdoc-preview.js';
import {type Icon, getIcons} from './get-icons.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/icons/solid/src');

export async function generateIconsSolid() {
	await fs.rm(outdir, {force: true, recursive: true});
	await fs.mkdir(outdir, {recursive: true});

	const icons = await getIcons();
	const promises = icons.map(async (icon) => {
		const component = await toSolidComponent(icon);
		const destination = path.join(outdir, `${icon.name.pascal}.tsx`);

		await fs.writeFile(destination, component, 'utf-8');

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

interface %name%Props extends ComponentProps<'svg'> {}

/**
 * %comment%
 */
export default function %name%(props: %name%Props) {
  const [local, others] = splitProps(props, ['class']);

  return %html%;
}

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(' ');
`;
