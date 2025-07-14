import colors from '@/app/assets/colors.json';
import isObject from 'lodash-es/isObject';
import {Color} from './types';

/*
 *
 * +--------+
 * |	INPUT	|
 * +--------+
 *
 * {
 *   black: "",
 *   gray: {
 *     50: "",
 *   },
 *   nested: {
 *     x: {
 *       50: "",
 *       deepNested: {
 *         y: {
 *           50: "",
 *         },
 *       }
 *     },
 *   },
 * }
 *
 * +----------+
 * |	OUTPUT	|
 * +----------+
 *
 * [
 *   {
 *     parent: [],
 *     children: {
 *       black: "",
 *     },
 *   },
 *   {
 *     parent: ["gray"],
 *     children: {
 *       50: "",
 *     },
 *   },
 *   {
 *     parent: ["nested", "x"],
 *     children: {
 *       50: "",
 *     },
 *   },
 *   {
 *     parent: ["nested", "x", "deepNested", "y"],
 *     children: {
 *       50: "",
 *     },
 *   },
 * ]
 *
 */

export const getColors = async (): Promise<Color[]> => {
	const l: Color[] = [];

	function fn(o: Record<string, any>, p: string[] = []) {
		for (const k in o) {
			const v = o[k];

			if (isObject(v)) {
				fn(v, [...p, k]);
			} else {
				const i =
					p.length <= 0
						? -1
						: l.findIndex((e) => e.parent?.join() === p.join());

				if (i >= 0) {
					l[i] = {
						...l[i],
						children: {
							...l[i].children,
							[k]: v,
						},
					};
				} else {
					l.push({
						parent: p,
						children: {[k]: v},
					});
				}
			}
		}
	}

	fn(colors);

	return l;
};
