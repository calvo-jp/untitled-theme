export type Alias<T> = T & {_?: never};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type GenericObject = Record<string, any>;
export type Pretty<T extends GenericObject> = {} & {[P in keyof T]: T[P]};
export type Assign<Target extends GenericObject, Source extends GenericObject> = Pretty<
	Source & Omit<Target, keyof Source>
>;

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
