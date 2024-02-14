import prettier from 'prettier';

export async function format_ts(content: string) {
	return await prettier.format(content, {
		parser: 'typescript',
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
	});
}
