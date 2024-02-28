type Alias<T> = T & {_?: never};
type Html = Alias<string>;

export interface Icon {
  displayName: string;
  content: Html;
  meta: {
    fileName: string;
  };
}
