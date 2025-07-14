'use client';

import {createContext, type PropsWithChildren, useContext} from 'react';
import type {UseIconsGalleryReturn} from './useIconsGallery';

export const IconsGalleryContext = createContext<UseIconsGalleryReturn | null>(
	null,
);

export function IconsGalleryProvider(
	props: PropsWithChildren<{value: UseIconsGalleryReturn}>,
) {
	return (
		<IconsGalleryContext value={props.value}>
			{props.children}
		</IconsGalleryContext>
	);
}

export function useIconsGalleryContext() {
	const context = useContext(IconsGalleryContext);

	if (!context) {
		throw new Error('useIconContext must be used within an IconProvider');
	}

	return context;
}
