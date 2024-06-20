import './globals.css';

import {ThemeProvider} from '@/lib/theme';
import {cx} from '@/styled-system/css';
import {styled} from '@/styled-system/jsx';
import type {Metadata} from 'next';
import {Fira_Code, Inter} from 'next/font/google';
import type {ReactNode} from 'react';
import {Navbar} from './navbar';

export const metadata: Metadata = {
	title: {
		default: 'Untitled Theme',
		template: 'Untitled Theme | %s',
	},
	description: 'Untitled UI icons for React and Svelte',
	metadataBase: new URL('https://untitled-theme-docs.vercel.app'),
	openGraph: {
		type: 'website',
		title: 'Untitled Theme',
		description: 'Untitled UI icons for React and Svelte',
		images: ['/opengraph.png'],
	},
};

const sans = Inter({
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	adjustFontFallback: true,
	variable: '--font-sans',
});

const mono = Fira_Code({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	adjustFontFallback: true,
	variable: '--font-mono',
});

export default function RootLayout(props: Readonly<{modal: ReactNode; children: ReactNode}>) {
	return (
		<styled.html
			lang="en"
			scrollBehavior="smooth"
			className={cx(sans.variable, mono.variable)}
			suppressHydrationWarning
		>
			<styled.body
				bg={{
					base: 'white',
					_dark: 'gray-true.900',
				}}
				color={{
					base: 'gray-true.700',
					_dark: 'gray-true.400',
				}}
				minH="dvh"
				fontFamily="sans"
				css={{
					'& *, & *::after, & *::before': {
						borderColor: {
							base: 'gray-true.200',
							_dark: 'gray-true.800',
						},
					},
					'& ::placeholder': {
						color: {
							base: 'gray-true.300',
							_dark: 'gray-true.400',
						},
					},
				}}
			>
				<ThemeProvider>
					<Navbar />

					<styled.main
						maxW="1024px"
						mx="auto"
						p={{
							base: '4',
							md: '8',
							lg: '12',
						}}
					>
						{props.children}
					</styled.main>

					{props.modal}
				</ThemeProvider>
			</styled.body>
		</styled.html>
	);
}
