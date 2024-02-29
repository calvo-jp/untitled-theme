import prettierEsTreePlugin from 'prettier/plugins/estree';
import prettierHtmlPlugin from 'prettier/plugins/html';
import prettierTsPlugin from 'prettier/plugins/typescript';
import prettier from 'prettier/standalone';
import * as svgson from 'svgson';
import type {Icon} from './types';

const REF = 'REF';
const REST = 'REST';

export async function toReactComponent(icon: Icon) {
  const node = await svgson.parse(icon.content, {
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

		export const ${icon.displayName} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
			return ${reactSvg};
		});

		${icon.displayName}.displayName = '${icon.displayName}'

    export default ${icon.displayName};
	`;

  return await prettier.format(component, {
    parser: 'typescript',
    plugins: [prettierTsPlugin, prettierEsTreePlugin],
    printWidth: 80,
    bracketSpacing: false,
  });
}

export async function toSvelteComponent(icon: Icon) {
  const node = await svgson.parse(icon.content, {
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

  return await prettier.format(component, {
    parser: 'html',
    plugins: [prettierHtmlPlugin],
    printWidth: 80,
    bracketSpacing: false,
  });
}

export async function toHtmlComponent(icon: Icon) {
  const node = await svgson.parse(icon.content, {
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

  return await prettier.format(htmlSvg, {
    parser: 'html',
    plugins: [prettierHtmlPlugin],
    printWidth: 80,
    bracketSpacing: false,
  });
}
