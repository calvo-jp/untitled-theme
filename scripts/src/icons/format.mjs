// @ts-check

import path from 'path';
import prettier from 'prettier';

let config = null;

async function get_config() {
	if (config) return config;

	const c = await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'));
	config = c;
	return c;
}

/**
 * @param {string} content
 */
export async function format_html(content) {
	return await prettier.format(content, {...(await get_config()), parser: 'html'});
}

/**
 * @param {string} content
 */
export async function format_ts(content) {
	return await prettier.format(content, {...(await get_config()), parser: 'typescript'});
}
