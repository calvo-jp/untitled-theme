import {getIcon} from '$lib/icons';
import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({params}) => {
  const icon = params.slug ? await getIcon(params.slug) : null;

  if (!icon) return error(404);

  return {
    icon,
  };
};
