// @ts-check

import path from 'path';
import prettier from 'prettier';

/**
 * @param {string} content
 */
export async function format_ts(content) {
	return await prettier.format(content, {
		parser: 'typescript',
		...(await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'))),
	});
}
