import {GeistMono} from 'geist/font/mono';
import {GeistSans} from 'geist/font/sans';
import type {Metadata} from 'next';
import {ThemeProvider} from 'next-themes';
import type {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';
import './globals.css';
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

export default function RootLayout(props: Readonly<{modal: ReactNode; children: ReactNode}>) {
  return (
    <html
      lang="en"
      className={twMerge(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          themes={['system', 'dark', 'light']}
          defaultTheme="system"
          attribute="data-theme"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
          <Navbar />
          <main className="mx-auto max-w-screen-lg p-4 md:p-8 lg:p-12">{props.children}</main>

          {props.modal}
        </ThemeProvider>
      </body>
    </html>
  );
}
