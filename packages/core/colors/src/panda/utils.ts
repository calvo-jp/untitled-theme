import type {ColorPallete, Pretty} from '../types.js';

type ToPanda<T extends ColorPallete> = {
	[I in keyof T]: T[I] extends string
		? {value: string}
		: {
				[J in keyof T[I]]: {value: string};
			};
};

export function toPanda<T extends ColorPallete>(subject: T) {
	const result: Record<string, {value: string} | Record<string, {value: string}>> = {};
	const copy = {...subject};

	Object.entries(copy).forEach(([k1, v1]) => {
		if (typeof v1 === 'string') {
			result[k1] = {value: v1};
		} else {
			Object.entries(v1).forEach(([k2, v2]) => {
				const prev = result[k1] ? result[k1] : {};

				result[k1] = {
					...prev,

					[k2]: {
						value: v2,
					},
				};
			});
		}
	});

	return result as Pretty<ToPanda<T>>;
}
