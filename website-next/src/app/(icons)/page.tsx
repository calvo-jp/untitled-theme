import icons from '@/app/assets/icons.json';
import {Metadata} from 'next';
import {Suspense} from 'react';
import {Searchbar} from '../Searchbar';
import {IconsGallery} from './IconsGallery';
import {Icon} from './types';

export const metadata: Metadata = {
  title: 'Icons',
};

export default async function Page() {
  return (
    <>
      <Suspense fallback={null}>
        <Searchbar className="mb-5 lg:mb-8" />
      </Suspense>
      <Suspense fallback={null}>
        <IconsGallery icons={icons as unknown as Icon[]} />
      </Suspense>
    </>
  );
}
