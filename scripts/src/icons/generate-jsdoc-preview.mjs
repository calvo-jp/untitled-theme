import svg64 from 'svg64';
import svgson from 'svgson';
import {config} from './config.mjs';

/**
 * @param {string} svg
 */
export async function generate_jsdoc_preview(svg) {
	const p = await svgson.parse(svg, {
		transformNode(node) {
			if (node.name === 'svg') {
				node.attributes['width'] = config.width;
				node.attributes['height'] = config.height;
				node.attributes['viewBox'] = config.viewBox;
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

	const s = svgson.stringify(p, {
		transformAttr(key, value, escape) {
			if (key === 'stroke') {
				return `${key}="black"`;
			} else if (key === 'stroke-width') {
				return `${key}="${config.strokeWidth}"`;
			} else {
				return `${key}="${escape(value)}"`;
			}
		},
	});

	return `![img](${svg64(s)})`;
}
