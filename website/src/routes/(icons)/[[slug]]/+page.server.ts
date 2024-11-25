import {getIcon, getIcons} from '$lib/icons';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params, url}) => {
	const search = url.searchParams.get('search')?.trim();
	const icons = await getIcons(search);
	const icon = params.slug ? await getIcon(params.slug) : null;

	return {
		icon,
		icons,
	};
};
