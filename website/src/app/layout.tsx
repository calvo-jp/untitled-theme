import './globals.css';

import {ThemeProvider} from '@/lib/theme-provider';
import type {Metadata, Viewport} from 'next';
import {Fira_Code, Inter} from 'next/font/google';
import type {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';
import {Navbar} from './navbar';

export const metadata: Metadata = {
	title: {
		default: 'Untitled Theme',
		template: 'Untitled Theme | %s',
	},
	description: 'Untitled UI for React, Svelte and SolidJS',
	metadataBase: new URL('https://untitled-theme-docs.vercel.app'),
	openGraph: {
		type: 'website',
		title: 'Untitled Theme',
	},
};

export const viewport: Viewport = {
	width: 'device-width',
	viewportFit: 'contain',
	userScalable: false,
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
	colorScheme: 'dark light',
	themeColor: [
		{media: '(prefers-color-scheme: light)', color: '#ffffff'},
		{media: '(prefers-color-scheme: dark)', color: '#000000'},
	],
};

const sans = Inter({
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	adjustFontFallback: true,
	variable: '--font-sans',
	fallback: [
		'system-ui',
		'-apple-system',
		'BlinkMacSystemFont',
		"'Segoe UI'",
		'Roboto',
		'Oxygen',
		'Ubuntu',
		'Cantarell',
		"'Open Sans'",
		"'Helvetica Neue'",
		'sans-serif',
	],
});

const mono = Fira_Code({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	adjustFontFallback: true,
	variable: '--font-mono',
	fallback: [
		/**/
		"'Courier New'",
		'Courier',
		'monospace',
	],
});

export default function RootLayout(props: Readonly<{modal: ReactNode; children: ReactNode}>) {
	return (
		<html
			lang="en"
			className={twMerge(sans.variable, mono.variable, 'scroll-smooth')}
			suppressHydrationWarning
		>
			<body
				className={twMerge(
					'min-h-dvh',
					'font-sans',
					'bg-white',
					'text-gray-true-700',
					'dark:bg-gray-true-900',
					'dark:text-gray-true-400',
				)}
			>
				<ThemeProvider>
					<Navbar />

					<main className="max-w-screen-lg mx-auto p-4 md:p-8 lg:p-12">{props.children}</main>

					{props.modal}
				</ThemeProvider>
			</body>
		</html>
	);
}
