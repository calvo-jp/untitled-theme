// @ts-check

import path from 'path';
import prettier from 'prettier';

const config = await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'));

/**
 * @param {string} content
 */
export async function format_html(content) {
	return await prettier.format(content, {...config, parser: 'html'});
}

/**
 * @param {string} content
 */
export async function format_ts(content) {
	return await prettier.format(content, {...config, parser: 'typescript'});
}
