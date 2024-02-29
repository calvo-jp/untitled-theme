import type {Html, Icon} from '@/app/types';
import fs from 'fs/promises';
import {unstable_cache as cache} from 'next/cache';
import path from 'path';
import prettier from 'prettier';
import {codeToHtml} from 'shiki';
import * as svgson from 'svgson';

function dashToPascal(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export const getIcons = cache(
  async ({search}: {search?: string}) => {
    const root = path.resolve(process.cwd(), '../assets/icons');
    const files = await fs.readdir(root, 'utf-8');

    const promises = files.map<Promise<Icon>>(async (fileName) => {
      const content = await fs.readFile(path.join(root, fileName), 'utf-8');
      const parsed = await svgson.parse(content, {
        transformNode(node) {
          if (node.name === 'svg') {
            node.attributes['width'] = '32';
            node.attributes['height'] = '32';
          }

          return node;
        },
      });

      const html = svgson.stringify(parsed, {
        selfClose: true,
        transformAttr(key, value, escape) {
          if (key === 'stroke') return `${key}="currentColor"`;
          if (key === 'stroke-width') return `${key}="1.5"`;
          return `${key}="${escape(value)}"`;
        },
      });

      const slug = path.parse(fileName).name;
      const name = dashToPascal(slug) + 'Icon';

      return {
        slug,
        name,
        html,
      };
    });

    const icons = await Promise.all(promises);

    if (!search) return icons;

    return icons.filter((icon) =>
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
    const fullPath = path.resolve(process.cwd(), '../assets/icons', `${slug}.svg`);

    try {
      await fs.stat(fullPath);
    } catch {
      return null;
    }

    const content = await fs.readFile(fullPath, 'utf-8');
    const parsed = await svgson.parse(content, {
      transformNode(node) {
        if (node.name === 'svg') {
          node.attributes['width'] = '32';
          node.attributes['height'] = '32';
        }

        return node;
      },
    });

    const html = svgson.stringify(parsed, {
      selfClose: true,
      transformAttr(key, value, escape) {
        if (key === 'stroke') return `${key}="currentColor"`;
        if (key === 'stroke-width') return `${key}="1.5"`;
        return `${key}="${escape(value)}"`;
      },
    });

    const name = dashToPascal(slug) + 'Icon';

    return {
      slug,
      name,
      html,
      snippet: {
        html: await toHtmlSnippet(html),
        react: await toReactSnippet(html, name),
        svelte: await toSvelteSnippet(html),
      },
    };
  },
  ['icon'],
);
