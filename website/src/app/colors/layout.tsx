import type {Metadata} from 'next';
import type {ReactNode} from 'react';

export const metadata: Metadata = {
	title: 'Colors',
	description: 'Untitled UI colors',
	openGraph: {
		images: ['/opengraph-colors.png'],
	},
};

export default function Layout({children}: Readonly<{children: ReactNode}>) {
	return children;
}
