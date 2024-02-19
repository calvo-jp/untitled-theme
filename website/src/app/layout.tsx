import {styled} from '@/styled-system/jsx';
import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const sans = Inter({
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: {
		default: 'Untitled Theme',
		template: 'Untitled Theme | %s',
	},
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<styled.html lang="en" className={sans.className}>
			<styled.body fontFamily="sans">{children}</styled.body>
		</styled.html>
	);
}
