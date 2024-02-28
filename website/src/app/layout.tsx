import {GeistMono} from 'geist/font/mono';
import {GeistSans} from 'geist/font/sans';
import {Metadata} from 'next';
import {twMerge} from 'tailwind-merge';
import './globals.css';
import {Navbar} from './navbar';
import {Providers} from './providers';

export const metadata: Metadata = {
  title: {
    default: '@untitled-theme/icons-{react|svelte}',
    template: '@untitled-theme/icons-{react|svelte} | %s',
  },
  description: 'Untitled UI icons for React and Svelte',
  openGraph: {
    type: 'website',
    title: '@untitled-theme/icons-{react|svelte}',
    description: 'Untitled UI icons for React and Svelte',
    images: ['/opengraph.png'],
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="en"
      className={twMerge(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-screen-lg p-4 md:p-8 lg:p-12">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
