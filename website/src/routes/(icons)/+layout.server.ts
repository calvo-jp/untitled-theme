import {getIcon, getIcons} from '$lib/icons';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async ({params, url}) => {
	const search = url.searchParams.get('search')?.trim();
	const icons = await getIcons(search);

	return {
		icons,
	};
};
