// @ts-check

import path from 'path';
import prettier from 'prettier';

/**
 * @param {string} content
 */
export async function format_html(content) {
	return await prettier.format(content, {
		parser: 'html',
		...(await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'))),
	});
}
