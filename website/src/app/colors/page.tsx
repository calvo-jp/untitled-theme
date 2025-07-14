import type {Metadata} from 'next';
import {Suspense} from 'react';
import {Searchbar} from '../Searchbar';
import {SearchbarSkeleton} from '../SearchbarSkeleton';
import {ColorsGallery} from './ColorsGallery';
import {ColorsGallerySkeleton} from './ColorsGallerySkeleton';
import {getColors} from './utils';

export const metadata: Metadata = {
	title: 'Colors',
};

export default async function Page() {
	const colors = await getColors();

	return (
		<>
			<Suspense fallback={<SearchbarSkeleton className="mb-5 lg:mb-8" />}>
				<Searchbar className="mb-5 lg:mb-8" />
			</Suspense>
			<Suspense fallback={<ColorsGallerySkeleton />}>
				<ColorsGallery colors={colors} />
			</Suspense>
		</>
	);
}
