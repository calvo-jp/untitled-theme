// @ts-check

import {svg64} from 'svg64';
import {parse, stringify} from 'svgson';

/**
 * @param {string} svg
 */
export async function generate_jsdoc_preview(svg) {
	const p = await parse(svg, {
		transformNode(node) {
			if (node.name === 'svg') {
				node.attributes.width = '24';
				node.attributes.height = '24';
				node.children.unshift({
					name: 'rect',
					type: 'element',
					value: '',
					children: [],
					attributes: {
						fill: 'white',
						width: '100%',
						height: '100%',
					},
				});
			}

			return node;
		},
	});

	const s = stringify(p, {
		transformAttr(key, value, escape) {
			if (key === 'stroke-width') {
				return 'stroke-width="1.66667"';
			}

			return `${key}="${escape(value)}"`;
		},
	});

	return `![img](${svg64(s)})`;
}
