import path from 'node:path';
import prettier from 'prettier';
import {create_lru_cache} from './create-lru-cache.mjs';

/** @type {import('prettier').Options | null} */
let config = null;

async function get_config() {
  if (config) return config;

  const c = await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'));
  config = c;
  return c;
}

/** @type {import('./create-lru-cache.mjs').LruCache<string, string>} */
let cache_0 = create_lru_cache(1000);

/**
 * @param {string} content
 */
export async function format_svelte(content) {
  let v = cache_0.get(content);

  if (v) return v;

  v = await prettier.format(content, {
    ...(await get_config()),
    htmlWhitespaceSensitivity: 'ignore',
    embeddedLanguageFormatting: 'off',
    parser: 'html',
  });

  cache_0.set(content, v);
  return v;
}

/** @type {import('./create-lru-cache.mjs').LruCache<string, string>} */
let cache_1 = create_lru_cache(1000);

/**
 * @param {string} content
 */
export async function format_ts(content) {
  let v = cache_1.get(content);

  if (v) return v;

  v = await prettier.format(content, {...(await get_config()), parser: 'typescript'});
  cache_1.set(content, v);
  return v;
}

/** @type {import('./create-lru-cache.mjs').LruCache<string, string>} */
let cache_2 = create_lru_cache(1000);

/**
 * @param {string} content
 */
export async function format_json(content) {
  let v = cache_2.get(content);

  if (v) return v;

  v = await prettier.format(content, {...(await get_config()), parser: 'json'});
  cache_2.set(content, v);
  return v;
}
