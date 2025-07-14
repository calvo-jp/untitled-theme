import type {Metadata} from 'next';
import {Suspense} from 'react';
import icons from '@/app/assets/icons.json';
import {Searchbar} from '../Searchbar';
import {SearchbarSkeleton} from '../SearchbarSkeleton';
import {IconsGallery} from './IconsGallery';
import {IconsGallerySkeleton} from './IconsGallerySkeleton';
import type {Icon} from './types';

export const metadata: Metadata = {
	title: 'Icons',
};

export default async function Page() {
	return (
		<>
			<Suspense fallback={<SearchbarSkeleton className="mb-5 lg:mb-8" />}>
				<Searchbar className="mb-5 lg:mb-8" />
			</Suspense>
			<Suspense fallback={<IconsGallerySkeleton />}>
				<IconsGallery icons={icons as unknown as Icon[]} />
			</Suspense>
		</>
	);
}
