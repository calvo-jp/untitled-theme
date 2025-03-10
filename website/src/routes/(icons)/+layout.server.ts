import {dev} from '$app/environment';
import {getIcon, getIcons} from '$lib/icons';
import type {LayoutServerLoad} from './$types';

export const load: LayoutServerLoad = async ({url, params, setHeaders}) => {
  if (!dev) setHeaders({'cache-control': 'public, max-age=2592000'});

  const search = url.searchParams.get('search')?.trim();
  const icons = await getIcons(search);

  const slug = params.slug;
  const icon = slug ? await getIcon(slug) : null;

  return {
    icon,
    icons,
  };
};
