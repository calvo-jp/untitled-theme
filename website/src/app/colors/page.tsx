import type {Metadata} from 'next';
import {Suspense} from 'react';
import {Searchbar} from '../Searchbar';
import {ColorsGallery} from './ColorsGallery';
import {getColors} from './utils';

export const metadata: Metadata = {
	title: 'Colors',
};

export default async function Page() {
	const colors = await getColors();

	return (
		<>
			<Suspense fallback={null}>
				<Searchbar className="mb-5 lg:mb-8" />
			</Suspense>
			<Suspense fallback={null}>
				<ColorsGallery colors={colors} />
			</Suspense>
		</>
	);
}
