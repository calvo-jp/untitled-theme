import {getColors} from '$lib/colors';
import type {PageServerLoad} from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageServerLoad = async () => {
	const colors = await getColors();
	return {colors};
};
