export type Alias<T> = T & {_?: never};
export type Html = Alias<string>;
export type GenericObject = Record<string, any>;
export type Pretty<T extends GenericObject> = {} & {[P in keyof T]: T[P]};
export type Assign<Target extends GenericObject, Source extends GenericObject> = Pretty<
  Source & Omit<Target, keyof Source>
>;
