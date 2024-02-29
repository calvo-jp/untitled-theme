import {GeistMono} from 'geist/font/mono';
import {GeistSans} from 'geist/font/sans';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';
import './globals.css';
import {Navbar} from './navbar';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: {
    default: '@untitled-theme',
    template: '@untitled-theme | %s',
  },
  description: 'Untitled UI icons for React and Svelte',
  metadataBase: new URL('https://untitled-theme-docs.vercel.app'),
  openGraph: {
    type: 'website',
    title: '@untitled-theme',
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
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-screen-lg p-4 md:p-8 lg:p-12">{props.children}</main>

          {props.modal}
        </Providers>
      </body>
    </html>
  );
}
