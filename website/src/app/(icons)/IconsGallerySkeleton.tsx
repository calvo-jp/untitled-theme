import type {CSSProperties} from 'react';

export interface IconsGallerySkeletonProps {
	id?: string;
	style?: CSSProperties;
	className?: string;
}

export function IconsGallerySkeleton(props: IconsGallerySkeletonProps) {
	return (
		<div {...props}>
			<div className="mb-3 h-4 w-40 animate-pulse rounded bg-gray-50 dark:bg-neutral-800" />
			<div className="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
				{Array.from({length: 40}).map((_, idx) => (
					<div
						key={idx}
						className="aspect-square w-full animate-pulse rounded bg-gray-50 dark:bg-neutral-800"
					/>
				))}
			</div>
		</div>
	);
}
