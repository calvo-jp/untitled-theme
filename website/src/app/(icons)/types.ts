export type IIcon<WithSnippet extends boolean = false> = WithSnippet extends true
	? {
			slug: string;
			html: string;
			name: {
				formal: string;
				pascal: string;
				kebab: string;
			};
			snippet: {
				html: {
					raw: string;
					html: string;
				};
				react: {
					raw: string;
					html: string;
				};
				solid: {
					raw: string;
					html: string;
				};
				svelte: {
					raw: string;
					html: string;
				};
			};
		}
	: {
			slug: string;
			html: string;
			name: {
				formal: string;
				pascal: string;
				kebab: string;
			};
		};
