import type {ColorPalette} from './types.js';

type CoreToPanda<T extends ColorPalette> = {
	[I in keyof T]: T[I] extends string
		? {value: T[I]}
		: {
				[J in keyof T[I]]: {value: T[I][J]};
			};
};

type Pretty<T extends Record<string, unknown>> = {[P in keyof T]: T[P]} & {};

export function coreToPanda<T extends ColorPalette>(value: T) {
	// biome-ignore lint/suspicious/noExplicitAny: ""
	const o: Record<string, any> = {};

	Object.entries(value).forEach(([k0, v0]) => {
		if (typeof v0 === 'string') {
			o[k0] = {value: v0};
		} else {
			o[k0] = {};

			Object.entries(v0).forEach(([k1, v1]) => {
				o[k0][k1] = {value: v1};
			});
		}
	});

	return o as Pretty<CoreToPanda<T>>;
}
