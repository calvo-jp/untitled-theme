import Link from 'next/link';
import {Suspense} from 'react';
import {Searchbar} from '../searchbar';
import {getIcons} from '../utils';

interface Props {
	searchParams: {
		search?: string | string[];
	};
}

export default async function IconsPage({searchParams}: Props) {
	const icons = await getIcons(searchParams.search?.toString());

	let totalHtml = '';

	if (icons.length === 0) {
		totalHtml += 'No icons found';
	} else if (icons.length === 1) {
		totalHtml += '1 icon found';
	} else {
		totalHtml += `${icons.length} icons found`;
	}

	if (searchParams.search) {
		totalHtml += ` for <strong>'${searchParams.search}'</strong>`;
	}

	return (
		<>
			<Suspense>
				<Searchbar />
			</Suspense>

			<div
				className="mb-3 mt-5 lg:mt-8 text-sm"
				dangerouslySetInnerHTML={{
					__html: totalHtml,
				}}
			/>

			<div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
				{icons.map((icon) => (
					<Link
						key={icon.slug}
						href={`/icons/${icon.slug}`}
						scroll={false}
						className="flex items-center justify-center rounded p-2 border aspect-square hover:bg-gray-true-50 dark:hover:bg-gray-true-800/10"
					>
						<span
							dangerouslySetInnerHTML={{
								__html: icon.html,
							}}
						/>

						<span className="sr-only">{icon.name.formal}</span>
					</Link>
				))}
			</div>
		</>
	);
}
