import {dev} from '$app/environment';
import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({parent, setHeaders}) => {
  if (!dev) setHeaders({'cache-control': 'public, max-age=2592000'});

  const {icon} = await parent();

  return icon ? {icon} : error(404);
};
