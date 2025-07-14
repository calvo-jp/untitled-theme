import fs from 'node:fs/promises';
import path from 'node:path';
import * as p from '@clack/prompts';
import prettier, {type Options} from 'prettier';
import {type CodeToHastOptions, codeToHtml} from 'shiki';
import svgson from 'svgson';
import {getWorkspaceRoot} from '../utils/get-workspace-root.js';
import {getIcons} from './get-icons.js';

async function generateWebsiteAsset() {
	p.intro('Generating database');

	const spinner = p.spinner();

	spinner.start('Fetching icons');
	const icons = await getIcons();

	spinner.message('Creating database content');
	const promises = icons.map(async (icon) => {
		const [html, react, solid, svelte] = await Promise.all([
			toHtmlSnippet(icon.html),
			toReactSnippet(icon.html, icon.name.pascal),
			toSolidSnippet(icon.html, icon.name.pascal),
			toSvelteSnippet(icon.html),
		]);

		return {
			name: icon.name.pascal,
			html: icon.html,
			snippets: {
				html,
				react,
				solid,
				svelte,
			},
		};
	});

	const items = await Promise.all(promises);

	const outputFile = path.join(
		getWorkspaceRoot(),
		'website/src/app/assets/icons.json',
	);

	spinner.message("Generating 'database.json'");
	await fs.writeFile(outputFile, JSON.stringify(items, null, 2), 'utf-8');

	spinner.stop();
	p.outro('Database generated successfully!');
}

const PRETTIER_CONFIG: Options = {
	singleQuote: true,
};

const SHIKI_CONFIG = {
	lang: 'typescript',
	themes: {
		dark: 'vitesse-dark',
		light: 'vitesse-light',
	},
	defaultColor: false,
} satisfies CodeToHastOptions;

const REF_PROP_KEY = 'REF';
const REST_PROP_KEY = 'REST';

async function toReactSnippet(svg: string, name: string) {
	const node = await svgson.parse(svg, {
		camelcase: true,
		transformNode(node) {
			if (node.name === 'svg') {
				return {
					...node,
					attributes: {
						[REF_PROP_KEY]: '',
						...node.attributes,
						width: '24',
						height: '24',
						[REST_PROP_KEY]: '',
					},
				};
			}

			return node;
		},
	});

	const reactSvg = svgson.stringify(node, {
		selfClose: true,
		transformAttr(key, value, esc) {
			if (key === REF_PROP_KEY) {
				return 'ref={ref}';
			} else if (key === REST_PROP_KEY) {
				return '{...props}';
			} else if (key === 'stroke') {
				return `${key}="currentColor"`;
			} else if (key === 'strokeWidth') {
				return `${key}="2"`;
			} else {
				return `${key}="${esc(value)}"`;
			}
		},
	});

	const component = `
		import * as React from 'react';

		export const ${name} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
			return ${reactSvg};
		});

		${name}.displayName = '${name}'

    export default ${name};
	`;

	return {
		raw: component,
		html: await codeToHtml(
			await prettier.format(component, {
				parser: 'typescript',
				...PRETTIER_CONFIG,
			}),
			SHIKI_CONFIG,
		),
	};
}

async function toSolidSnippet(svg: string, name: string) {
	const node = await svgson.parse(svg, {
		transformNode(node) {
			if (node.name === 'svg') {
				return {
					...node,
					attributes: {
						...node.attributes,

						width: '24',
						height: '24',
						[REST_PROP_KEY]: '',
					},
				};
			}

			return node;
		},
	});

	const solidSvg = svgson.stringify(node, {
		selfClose: true,
		transformAttr(key, value, esc) {
			if (key === REST_PROP_KEY) {
				return '{...props}';
			} else if (key === 'stroke') {
				return `${key}="currentColor"`;
			} else if (key === 'stroke-width') {
				return `${key}="2"`;
			} else {
				return `${key}="${esc(value)}"`;
			}
		},
	});

	const component = `
		import type { ComponentProps } from 'solid-js';

		export default function ${name}(props: ComponentProps<'svg'>) {
			return ${solidSvg};
		}
  `;

	return {
		raw: component,
		html: await codeToHtml(
			await prettier.format(component, {
				parser: 'typescript',
				...PRETTIER_CONFIG,
			}),
			SHIKI_CONFIG,
		),
	};
}

async function toSvelteSnippet(svg: string) {
	const node = await svgson.parse(svg, {
		transformNode(node) {
			if (node.name === 'svg') {
				return {
					...node,
					attributes: {
						...node.attributes,
						width: '24',
						height: '24',
						[REST_PROP_KEY]: '',
					},
				};
			}

			return node;
		},
	});

	const svelteSvg = svgson.stringify(node, {
		selfClose: false,
		transformAttr(key, value, esc) {
			if (key === REST_PROP_KEY) {
				return '{...props}';
			} else if (key === 'stroke') {
				return `${key}="currentColor"`;
			} else if (key === 'strokeWidth') {
				return `${key}="2"`;
			} else {
				return `${key}="${esc(value)}"`;
			}
		},
	});

	const component = `
		<script lang="ts">
			import type {SVGAttributes} from 'svelte/elements';

			let {...props}: SVGAttributes<SVGSVGElement> = $props();  
		</script>

		${svelteSvg}
	`;

	return {
		raw: component,
		html: await codeToHtml(
			await prettier.format(component, {parser: 'html', ...PRETTIER_CONFIG}),
			{
				...SHIKI_CONFIG,
				lang: 'svelte',
			},
		),
	};
}

async function toHtmlSnippet(svg: string) {
	const node = await svgson.parse(svg, {
		transformNode(node) {
			if (node.name === 'svg') {
				return {
					...node,
					attributes: {
						...node.attributes,
						width: '24',
						height: '24',
					},
				};
			}

			return node;
		},
	});

	const component = svgson.stringify(node, {
		selfClose: false,
		transformAttr(key, value, esc) {
			if (key === 'stroke') {
				return `${key}="currentColor"`;
			} else if (key === 'strokeWidth') {
				return `${key}="2"`;
			} else {
				return `${key}="${esc(value)}"`;
			}
		},
	});

	return {
		raw: component,
		html: await codeToHtml(
			await prettier.format(component, {parser: 'html', ...PRETTIER_CONFIG}),
			{
				...SHIKI_CONFIG,
				lang: 'html',
			},
		),
	};
}

generateWebsiteAsset();
