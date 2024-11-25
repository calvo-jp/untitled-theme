import icons from '$lib/assets/icons.json';
import prettier, {type Options} from 'prettier';
import {type CodeToHastOptions, codeToHtml} from 'shiki';
import * as svgson from 'svgson';

interface IconName {
	kebab: string;
	formal: string;
	pascal: string;
}

interface Snippet {
	raw: string;
	html: string;
}

interface IconBase {
	slug: string;
	html: string;
	name: IconName;
}

interface IconWithSnippets extends IconBase {
	snippets: {
		html: Snippet;
		react: Snippet;
		solid: Snippet;
		svelte: Snippet;
	};
}

export type Icon<WithSnippets = false> = WithSnippets extends true ? IconWithSnippets : IconBase;

export async function getIcons(search?: string | null): Promise<Icon[]> {
	const l = [...icons];
	const s = search?.toLowerCase().replace(/\s/g, '') ?? '';

	if (s.length <= 0) return l;

	return l.filter((icon) => icon.name.formal.toLowerCase().replace(/\s/g, '').includes(s));
}

export async function getIcon(slug: string): Promise<Icon<true> | null> {
	const l = [...icons];
	const o = l.find((icon) => icon.slug === slug);

	if (!o) return null;

	const [html, react, solid, svelte] = await Promise.all([
		toHtmlSnippet(o.html),
		toReactSnippet(o.html, o.name.pascal),
		toSolidSnippet(o.html, o.name.pascal),
		toSvelteSnippet(o.html),
	]);

	return {
		...o,
		snippets: {
			html,
			react,
			solid,
			svelte,
		},
	};
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
