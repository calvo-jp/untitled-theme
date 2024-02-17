import path from 'path';
import prettier from 'prettier';

export async function format_html(content: string) {
	return await prettier.format(content, {
		parser: 'html',
		...(await prettier.resolveConfig(path.join(process.cwd(), '.prettierrc'))),
	});
}
