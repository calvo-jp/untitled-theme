import type {Metadata} from 'next';
import type {ReactNode} from 'react';

export const metadata: Metadata = {
	title: {
		default: 'Icons',
		template: 'Untitled Theme | %s',
	},
	description: 'Untitled UI icons',
	openGraph: {
		images: ['/opengraph-icons.png'],
	},
};

export default function Layout({children}: Readonly<{children: ReactNode}>) {
	return children;
}
