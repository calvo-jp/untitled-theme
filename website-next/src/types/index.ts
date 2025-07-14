export interface IconSnippetEntry {
  raw: string;
  html: string;
}

export interface IconSnippetEntries {
  html: IconSnippetEntry;
  react: IconSnippetEntry;
  solid: IconSnippetEntry;
  svelte: IconSnippetEntry;
}

export interface Icon {
  html: string;
  name: string;
  snippets: IconSnippetEntries;
}
