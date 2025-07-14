import type {Metadata} from 'next';
import {Fira_Code, Inter, Rammetto_One} from 'next/font/google';
import {twMerge} from 'tailwind-merge';
import './globals.css';
import {Navbar} from './Navbar';
import {Providers} from './Providers';

const body = Inter({
	weight: ['400', '700'],
	style: 'normal',
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-sans',
});

const heading = Rammetto_One({
	weight: '400',
	style: 'normal',
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-heading',
});

const mono = Fira_Code({
	weight: '400',
	style: 'normal',
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-mono',
});

export const metadata: Metadata = {
	title: {
		default: 'Untitled Theme',
		template: '%s | Untitled Theme',
	},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html
			lang="en"
			className={twMerge(
				body.variable,
				heading.variable,
				mono.variable,
				'scroll-smooth',
			)}
			suppressHydrationWarning
		>
			<body className="min-h-dvh bg-white font-sans text-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
				<Providers>
					<Navbar />
					<main className="mx-auto max-w-screen-lg p-4 md:p-8 lg:p-12">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}
