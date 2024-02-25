import path from 'node:path';
import prettier from 'prettier';
import {createLruCache} from './lru-cache.mjs';

/** @type {import('prettier').Options | null} */
let config = null;

async function get_config() {
	if (config) return config;

	const c = await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'));
	config = c;
	return c;
}

/** @type {import('./lru-cache.mjs').LruCache<string, string>} */
let cache = createLruCache(1000);

/**
 * @param {string} content
 */
export async function format_html(content) {
	let f = cache.get(content);

	if (f) return f;

	f = await prettier.format(content, {...(await get_config()), parser: 'html'});

	return f;
}

/**
 * @param {string} content
 */
export async function format_ts(content) {
	let f = cache.get(content);

	if (f) return f;

	f = await prettier.format(content, {...(await get_config()), parser: 'typescript'});

	return f;
}
