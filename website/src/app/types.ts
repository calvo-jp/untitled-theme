export type Alias<T> = T & {_?: never};
export type GenericObject = Record<string, any>;
export type Pretty<T extends GenericObject> = {} & {[P in keyof T]: T[P]};
export type Assign<Target extends GenericObject, Source extends GenericObject> = Pretty<
  Source & Omit<Target, keyof Source>
>;
export type Html = Alias<string>;
export type Snippet = Alias<string>;
export type Icon<WithSnippet extends boolean = false> = WithSnippet extends true
  ? {
      slug: string;
      name: string;
      html: Html;
      snippet: {
        html: Snippet;
        react: Snippet;
        svelte: Snippet;
      };
    }
  : {
      slug: string;
      name: string;
      html: Html;
    };
