import type {ColorPalette} from './types';

type CoreToPanda<T extends ColorPalette> = {
	[I in keyof T]: T[I] extends string
		? {value: T[I]}
		: {
				[J in keyof T[I]]: {value: T[I][J]};
			};
};

export function core_to_panda<T extends ColorPalette>(value: T) {
	const o: Record<string, any> = {};

	Object.entries(value).forEach(([k_0, v_0]) => {
		if (typeof v_0 === 'string') {
			o[k_0] = {value: v_0};
		} else {
			o[k_0] = {};

			Object.entries(v_0).forEach(([k_1, v_1]) => {
				o[k_0][k_1] = {value: v_1};
			});
		}
	});

	return o as CoreToPanda<T>;
}
