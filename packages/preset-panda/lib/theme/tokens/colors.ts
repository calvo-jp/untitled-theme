import {defineTokens} from '@pandacss/dev';
import {colors as utColors} from '@untitled-theme/colors';

type Colors = typeof utColors;

export const colors = defineTokens.colors(
	(function convert_to_pandacss_colors() {
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
		const o: Record<string, any> = {};

		Object.entries(utColors).forEach(([k_0, v_0]) => {
			if (typeof v_0 === 'string') {
				o[k_0] = {value: v_0};
			} else {
				o[k_0] = {};

				Object.entries(v_0).forEach(([k_1, v_1]) => {
					o[k_0][k_1] = {value: v_1};
				});
			}
		});

		return o as {
			[I in keyof Colors]: Colors[I] extends string
				? {value: Colors[I]}
				: {[J in keyof Colors[I]]: {value: Colors[I][J]}};
		};
	})(),
);
