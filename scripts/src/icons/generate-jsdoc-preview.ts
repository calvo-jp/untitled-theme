import {Buffer} from 'node:buffer';
import svgson from 'svgson';
import {createLruCache} from '../utils/create-lru-cache.js';

const cache = createLruCache<string, string>(1000);

export async function generateJsdocPreview(svg: string) {
  let v = cache.get(svg);

  if (v) return v;

  const p = await svgson.parse(svg, {
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

  v = Buffer.from(svgson.stringify(p)).toString('base64');
  v = `![img](data:image/svg+xml;base64,${v})`;

  cache.set(svg, v);

  return v;
}
