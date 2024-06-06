import type {ColorPalette} from './types.js';

type CoreToPanda<T extends ColorPalette> = {
	[I in keyof T]: T[I] extends string
		? {value: T[I]}
		: {
				[J in keyof T[I]]: {value: T[I][J]};
			};
};

type Pretty<T extends Record<string, unknown>> = {[P in keyof T]: T[P]} & {};

export function coreToPanda<T extends ColorPalette>(obj: T) {
	// biome-ignore lint/suspicious/noExplicitAny: ""
	const o: Record<string, any> = {};

	for (const k1 in obj) {
		const v1 = obj[k1];

		if (typeof v1 === 'string') {
			o[k1] = {value: v1};
		} else {
			o[k1] = {};

			for (const k2 in v1) {
				const v2 = v1[k2];

				o[k1][k2] = {value: v2};
			}
		}
	}

	return o as Pretty<CoreToPanda<T>>;
}
