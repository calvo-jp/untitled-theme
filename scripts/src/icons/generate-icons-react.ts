import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {type BarrelItem, createBarrelFile} from './create-barrel-file.js';
import {generateJsdocPreview} from './generate-jsdoc-preview.js';
import {type Icon, getIcons} from './get-icons.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/icons/react/src');

export async function generateIconsReact() {
	await fs.rm(outdir, {force: true, recursive: true});
	await fs.mkdir(outdir, {recursive: true});

	const icons = await getIcons();
	const promises = icons.map(async (icon) => {
		const component = await toReactComponent(icon);
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

const REF = 'REF';
const CLASSNAME = 'CLASSNAME';
const REST_PROPS = 'REST_PROPS';

async function toReactComponent(icon: Icon) {
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

	const reactSvg = svgson.stringify(node, {
		selfClose: true,
		transformAttr(key, value, esc) {
			if (key === REF) {
				return 'ref={ref}';
			}

			if (key === CLASSNAME) {
				return `className={cx("untitled-icon ${icon.name.kebab}", className)}`;
			}

			if (key === REST_PROPS) {
				return '{...props}';
			}

			return `${key}="${esc(value)}"`;
		},
	});

	return template
		.replaceAll('%name%', icon.name.pascal)
		.replaceAll('%html%', reactSvg)
		.replaceAll('%comment%', await generateJsdocPreview(icon.html));
}

const template = `
import * as React from 'react';

interface %name%Props extends React.SVGProps<SVGSVGElement> {}

/**
 * %comment%
 */
const %name% = React.forwardRef<
  SVGSVGElement,
  %name%Props
>(({className, ...props}, ref) => {
  return %html%;
});

const cx = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

%name%.displayName = '%name%'

export default %name%;
`;
