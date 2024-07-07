import type {ColorPallete, Pretty} from '../types.js';

type ToString<T> = T extends string | number ? T : '';

type CreateFlattenedVars<Subject, Prefix extends string = '--'> = {
	[K in keyof Subject as Subject[K] extends string | number
		? `${Prefix}${ToString<K>}`
		: Subject extends object
			? keyof CreateFlattenedVars<Subject[K], `--${ToString<K>}-`>
			: never]: string;
};

type ToVars<T extends ColorPallete> = CreateFlattenedVars<T>;

export function toVars<T extends ColorPallete>(subject: T) {
	const result: Record<string, string> = {};
	const copy = {...subject};

	Object.entries(copy).forEach(([k1, v1]) => {
		if (typeof v1 === 'string') {
			result[`--${k1}`] = v1;
		} else {
			Object.entries(v1).forEach(([k2, v2]) => {
				result[`--${k1}-${k2}`] = v2;
			});
		}
	});

	return result as Pretty<ToVars<T>>;
}
