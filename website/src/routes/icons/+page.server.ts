import {getIcons} from '$lib/icons';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async () => {
	const icons = await getIcons();
	return {icons};
};
