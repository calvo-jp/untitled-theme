import {unstable_cache as cache} from 'next/cache';
import prettier, {type Options} from 'prettier';
import {type CodeToHastOptions, codeToHtml} from 'shiki';
import * as svgson from 'svgson';
import colors from '../assets/colors.json';
import icons from '../assets/icons.json';

/*
 *
 * ========================
 * 				ICONS
 * ========================
 *
 */

export type GetIconsReturn = Awaited<ReturnType<typeof getIcons>>;

export const getIcons = cache(
	async (search = '') => {
		const l = [...icons];
		const s = search.toLowerCase().replace(/\s/g, '');

		return l.filter((icon) => icon.name.formal.toLowerCase().replace(/\s/g, '').includes(s));
	},
	['untitled-theme/icons'],
);

/*
 *
 * ========================
 * 				ICON
 * ========================
 *
 */

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
			await prettier.format(component, {parser: 'typescript', ...PRETTIER_CONFIG}),
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
			await prettier.format(component, {parser: 'typescript', ...PRETTIER_CONFIG}),
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

	const svelteSvg = svgson.stringify(node, {
		selfClose: false,
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
		<script lang="ts">
			import type {SVGAttributes} from 'svelte/elements';

			let {...props}: SVGAttributes<SVGSVGElement> = $props();  
		</script>

		${svelteSvg}
	`;

	return {
		raw: component,
		html: await codeToHtml(await prettier.format(component, {parser: 'html', ...PRETTIER_CONFIG}), {
			...SHIKI_CONFIG,
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
		html: await codeToHtml(await prettier.format(component, {parser: 'html', ...PRETTIER_CONFIG}), {
			...SHIKI_CONFIG,
			lang: 'html',
		}),
	};
}

export type GetIconReturn = NonNullable<Awaited<ReturnType<typeof getIcon>>>;

export const getIcon = cache(
	async (slug: string) => {
		const icon = icons.find((icon) => icon.slug === slug);

		if (!icon) return null;

		return {
			...icon,
			snippet: {
				html: await toHtmlSnippet(icon.html),
				react: await toReactSnippet(icon.html, icon.name.pascal),
				solid: await toSolidSnippet(icon.html, icon.name.pascal),
				svelte: await toSvelteSnippet(icon.html),
			},
		};
	},
	['untitled-theme/icons/[id]'],
);

export type GetColorsReturn = Awaited<ReturnType<typeof getColors>>;

export const getColors = cache(
	async (search = '') => {
		const l: Record<string, Record<string, string>> = {...colors};
		const s = search.trim().toLowerCase().replace(/-/g, '').replace(/\s/g, '');

		if (s.length <= 0) return l;

		Object.keys(colors).forEach((k) => {
			const m = k.replace(/-/g, '').toLowerCase().includes(s);

			if (!m) {
				delete l[k];
			}
		});

		return l;
	},
	['untitled-theme/colors'],
);
