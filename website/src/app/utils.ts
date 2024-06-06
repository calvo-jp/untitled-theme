import type {IIcon} from '@/app/types';
import {unstable_cache as cache} from 'next/cache';
import prettier, {type Options} from 'prettier';
import {codeToHtml, type CodeToHastOptions} from 'shiki';
import * as svgson from 'svgson';
import database from './database.json';

interface GetIconsArgs {
	limit?: number;
	offset?: number;
	search?: string;
}

export const getIcons = cache(
	async ({search, limit, offset}: GetIconsArgs = {}) => {
		let l = database;

		if (search) {
			l = l.filter((icon) =>
				icon.name.formal
					.toLowerCase()
					.replace(/ /g, '')
					.includes(search.toLowerCase().replace(/ /g, '')),
			);
		}

		if (offset) {
			l = l.slice(offset);
		}

		if (limit) {
			l = l.slice(0, limit);
		}

		return l;
	},
	['untitled-theme/icons'],
);

const prettierConfig: Options = {
	singleQuote: true,
};

const shikiConfig = {
	lang: 'typescript',
	themes: {
		dark: 'vitesse-dark',
		light: 'vitesse-light',
	},
	defaultColor: false,
} satisfies CodeToHastOptions;

const REF = 'REF';
const REST = 'REST';

async function toReactSnippet(svg: string, name: string) {
	const node = await svgson.parse(svg, {
		camelcase: true,
		transformNode(node) {
			if (node.name === 'svg') {
				return {
					...node,
					attributes: {
						[REF]: '',
						...node.attributes,
						width: '24',
						height: '24',
						[REST]: '',
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
			} else if (key === REST) {
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
			await prettier.format(component, {parser: 'typescript', ...prettierConfig}),
			shikiConfig,
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
						[REST]: '',
					},
				};
			}

			return node;
		},
	});

	const solidSvg = svgson.stringify(node, {
		selfClose: true,
		transformAttr(key, value, esc) {
			if (key === REST) {
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
			await prettier.format(component, {parser: 'typescript', ...prettierConfig}),
			shikiConfig,
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
						[REF]: '',
						...node.attributes,
						width: '24',
						height: '24',
						[REST]: '',
					},
				};
			}

			return node;
		},
	});

	const svelteSvg = svgson.stringify(node, {
		selfClose: false,
		transformAttr(key, value, esc) {
			if (key === REF) {
				return 'ref={ref}';
			} else if (key === REST) {
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
		html: await codeToHtml(await prettier.format(component, {parser: 'html', ...prettierConfig}), {
			...shikiConfig,
			lang: 'svelte',
		}),
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
		html: await codeToHtml(await prettier.format(component, {parser: 'html', ...prettierConfig}), {
			...shikiConfig,
			lang: 'html',
		}),
	};
}

export const getIcon = cache(
	async (slug: string): Promise<IIcon<true> | null> => {
		const item = database.find((icon) => icon.slug === slug);

		if (!item) return null;

		return {
			...item,
			snippet: {
				html: await toHtmlSnippet(item.html),
				react: await toReactSnippet(item.html, item.name.pascal),
				solid: await toSolidSnippet(item.html, item.name.pascal),
				svelte: await toSvelteSnippet(item.html),
			},
		};
	},
	['untitled-theme/icons/[id]'],
);
