'use client';

import type {CSSProperties} from 'react';
import {twMerge} from 'tailwind-merge';

export interface SearchbarSkeletonProps {
	id?: string;
	style?: CSSProperties;
	className?: string;
}

export function SearchbarSkeleton(props: SearchbarSkeletonProps) {
	return (
		<div
			id={props.id}
			style={props.style}
			className={twMerge(
				'h-12 animate-pulse rounded bg-gray-50 dark:bg-neutral-800',
				props.className,
			)}
		/>
	);
}
