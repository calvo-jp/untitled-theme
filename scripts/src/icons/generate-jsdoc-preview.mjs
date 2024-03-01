import svg64 from 'svg64';
import svgson from 'svgson';
import {create_lru_cache} from '../utils/create-lru-cache.mjs';

/** @type {import('../utils/create-lru-cache.mjs').LruCache<string,string>} */
const cache = create_lru_cache(1000);

/**
 * @param {string} svg
 */
export function generate_jsdoc_preview(svg) {
  let v = cache.get(svg);

  if (v) return v;

  const p = svgson.parseSync(svg, {
    transformNode(node) {
      if (node.name === 'svg') {
        node.attributes.stroke = '#111827';
        node.children.unshift({
          name: 'rect',
          type: 'element',
          value: '',
          children: [],
          attributes: {
            fill: '#f9fafb',
            width: node.attributes.width,
            height: node.attributes.height,
          },
        });
      }

      return node;
    },
  });

  v = `![img](${svg64(svgson.stringify(p))})`;
  cache.set(svg, v);
  return v;
}
