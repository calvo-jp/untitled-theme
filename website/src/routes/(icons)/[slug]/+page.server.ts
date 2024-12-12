import {getIcon, getIcons} from '$lib/icons';
import {error} from '@sveltejs/kit';
import type {EntryGenerator, PageServerLoad} from './$types';

export const prerender = true;

export const entries: EntryGenerator = async () => {
  const icons = await getIcons();
  return icons.map(({slug}) => ({slug}));
};

export const load: PageServerLoad = async ({params, setHeaders}) => {
  setHeaders({'Cache-Control': 'public, max-age=28800'});

  const icon = params.slug ? await getIcon(params.slug) : null;

  if (!icon) return error(404);

  return {
    icon,
  };
};
