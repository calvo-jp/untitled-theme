import prettier from 'prettier';

export async function format_html(content: string) {
	return await prettier.format(content, {
		parser: 'html',
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
	});
}
