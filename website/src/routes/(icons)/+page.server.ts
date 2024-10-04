import {getIcons} from '$lib/icons';
import type {PageServerLoad} from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: PageServerLoad = async () => {
	const icons = await getIcons();
	return {icons};
};
