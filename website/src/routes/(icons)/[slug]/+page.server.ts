import {error} from '@sveltejs/kit';
import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({parent}) => {
  const {icon} = await parent();

  return icon ? {icon} : error(404);
};
