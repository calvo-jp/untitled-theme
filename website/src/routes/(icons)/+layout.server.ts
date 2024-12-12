import {getIcons} from '$lib/icons';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async ({url}) => {
  const search = url.searchParams.get('search')?.trim();
  const icons = await getIcons(search);

  return {
    icons,
  };
};
