import type {Html, Icon} from '@/app/types';
import {unstable_cache as cache} from 'next/cache';
import prettier from 'prettier';
import {codeToHtml} from 'shiki';
import * as svgson from 'svgson';
import database from './database.json';

export const getIcons = cache(
  async ({search}: {search?: string}) => {
    if (!search) return database;

    return database.filter((icon) =>
      icon.name.toLowerCase().replace(/ /g, '').includes(search.toLowerCase().replace(/ /g, '')),
    );
  },
  ['icons'],
);

const REF = 'REF';
const REST = 'REST';

async function toReactSnippet(svg: Html, name: string) {
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
            viewBox: '0 0 24 24',
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

  return await codeToHtml(
    await prettier.format(component, {
      parser: 'typescript',
      printWidth: 80,
    }),
    {
      lang: 'typescript',
      themes: {
        dark: 'vitesse-dark',
        light: 'vitesse-light',
      },
    },
  );
}

async function toSvelteSnippet(svg: Html) {
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
            viewBox: '0 0 24 24',
            [REST]: '',
          },
        };
      }

      return node;
    },
  });

  const svelteSvg = svgson.stringify(node, {
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
		<script lang="ts">
			import type {SVGAttributes} from 'svelte/elements';

			let {...props} = $props<SVGAttributes<SVGSVGElement>>();  
		</script>

		${svelteSvg}
	`;

  return await codeToHtml(
    await prettier.format(component, {
      parser: 'html',
      printWidth: 80,
    }),
    {
      lang: 'svelte',
      themes: {
        dark: 'vitesse-dark',
        light: 'vitesse-light',
      },
    },
  );
}

async function toHtmlSnippet(svg: Html) {
  const node = await svgson.parse(svg, {
    camelcase: true,
    transformNode(node) {
      if (node.name === 'svg') {
        return {
          ...node,
          attributes: {
            ...node.attributes,
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
          },
        };
      }

      return node;
    },
  });

  const htmlSvg = svgson.stringify(node, {
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

  return await codeToHtml(
    await prettier.format(htmlSvg, {
      parser: 'html',
      printWidth: 80,
    }),
    {
      lang: 'html',
      themes: {
        dark: 'vitesse-dark',
        light: 'vitesse-light',
      },
    },
  );
}

export const getIcon = cache(
  async (slug: string): Promise<Icon<true> | null> => {
    const item = database.find((icon) => icon.slug === slug);

    if (!item) return null;

    return {
      ...item,
      snippet: {
        html: await toHtmlSnippet(item.html),
        react: await toReactSnippet(item.html, item.name),
        svelte: await toSvelteSnippet(item.html),
      },
    };
  },
  ['icon'],
);
