import type {Metadata} from 'next';
import type {ReactNode} from 'react';

export const metadata: Metadata = {
	title: 'Colors',
	description: 'Untitled UI colors for Tailwind and Panda',
};

export default function Layout({children}: Readonly<{children: ReactNode}>) {
	return children;
}
