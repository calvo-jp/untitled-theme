import {GeistMono} from 'geist/font/mono';
import {GeistSans} from 'geist/font/sans';
import {Metadata} from 'next';
import {twMerge} from 'tailwind-merge';
import './globals.css';
import {Navbar} from './navbar';

export const metadata: Metadata = {
  title: '@untitled-theme/*',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={twMerge(GeistSans.variable, GeistMono.variable)}>
      <body>
        <Navbar />
        <main className="mx-auto max-w-screen-lg p-4 md:p-8 lg:p-12">{children}</main>
      </body>
    </html>
  );
}
