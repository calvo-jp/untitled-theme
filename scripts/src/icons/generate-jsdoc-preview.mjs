import svg64 from 'svg64';
import svgson from 'svgson';
import {config} from './config.mjs';
import {create_lru_cache} from './create-lru-cache.mjs';

/** @type {import('./create-lru-cache.mjs').LruCache<string,string>} */
let cache = create_lru_cache(1000);

/**
 * @param {string} svg
 */
export async function generate_jsdoc_preview(svg) {
  let v = cache.get(svg);

  if (v) return v;

  const p = await svgson.parse(svg, {
    transformNode(node) {
      if (node.name === 'svg') {
        node.attributes['width'] = '32';
        node.attributes['height'] = '32';
        node.attributes['viewBox'] = config.viewBox;
        node.children.unshift({
          name: 'rect',
          type: 'element',
          value: '',
          children: [],
          attributes: {
            fill: '#f8fafc',
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
        return `${key}="#334155"`;
      } else if (key === 'stroke-width') {
        return `${key}="${config.strokeWidth}"`;
      } else {
        return `${key}="${escape(value)}"`;
      }
    },
  });

  v = `![img](${svg64(s)})`;
  cache.set(svg, v);
  return v;
}
