import fs from 'node:fs/promises';
import path from 'node:path';
import svgson from 'svgson';
import {formatTypescript} from '../utils/formatter.js';
import {getIcons, type Icon} from '../utils/get-icons.js';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {createBarrelFile, type BarrelItem} from './create-barrel-file.js';
import {createCleanDir} from './create-clean-dir.js';
import {generateJsdocPreview} from './generate-jsdoc-preview.js';

const outdir = path.join(getWorkspaceRoot(), 'packages/icons/react/src');

export async function generateIconsReact() {
	await createCleanDir(outdir);

	const icons = await getIcons();
	const promises = icons.map(async (icon) => {
		const component = await toReactComponent(icon);
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

/**
 * %comment%
 */
const %name% = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>(({className, ...props}, ref) => {
  return %html%;
});

const cx = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

%name%.displayName = '%name%'

export default %name%;
`;
