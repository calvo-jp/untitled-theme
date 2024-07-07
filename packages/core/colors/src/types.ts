export type Pretty<T> = T extends object ? {[K in keyof T]: Pretty<T[K]>} & {} : T;

export interface ColorPallete {
	[key: string]: string | {[key: string]: string};
}
