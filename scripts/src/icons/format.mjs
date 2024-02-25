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
let cache = create_lru_cache(1000);

/**
 * @param {string} content
 */
export async function format_html(content) {
	let v = cache.get(content);

	if (v) return v;

	v = await prettier.format(content, {...(await get_config()), parser: 'html'});

	return v;
}

/**
 * @param {string} content
 */
export async function format_ts(content) {
	let v = cache.get(content);

	if (v) return v;

	v = await prettier.format(content, {...(await get_config()), parser: 'typescript'});

	return v;
}
