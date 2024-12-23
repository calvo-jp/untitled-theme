import {dev} from '$app/environment';
import {getColors} from '$lib/colors';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({url, setHeaders}) => {
  if (!dev) setHeaders({'cache-control': 'public, max-age=2592000'});

  const colors = await getColors();
  const search = url.searchParams
    .get('search')
    ?.trim()
    .toLowerCase()
    .replace(/[-\s]/g, '');

  if (!search) return {colors};

  return {
    colors: colors.filter((c) => {
      return c.parent.join('').replace(/-/g, '').toLowerCase().includes(search);
    }),
  };
};
