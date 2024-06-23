import type {Metadata} from 'next';
import type {ReactNode} from 'react';

export const metadata: Metadata = {
	description: 'Untitled UI icons for React, Svelte and SolidJS',
	openGraph: {
		images: ['/opengraph-icons.png'],
	},
};

export default function Layout({children}: Readonly<{children: ReactNode}>) {
	return children;
}
