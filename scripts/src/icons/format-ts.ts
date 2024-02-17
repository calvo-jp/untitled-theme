import path from 'path';
import prettier from 'prettier';

export async function format_ts(content: string) {
	return await prettier.format(content, {
		parser: 'typescript',
		...(await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'))),
	});
}
