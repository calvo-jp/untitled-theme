import type {Metadata} from 'next';
import {Fira_Code, Inter} from 'next/font/google';
import {twMerge} from 'tailwind-merge';
import './globals.css';
import {Navbar} from './navbar';

const sans = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  variable: '--font-sans',
});

const mono = Fira_Code({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: '@untitled-theme/*',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={twMerge(sans.variable, mono.variable)}>
      <body>
        <Navbar />
        <main className="max-w-screen-lg mx-auto p-4 md:p-8 lg:p-12">{children}</main>
      </body>
    </html>
  );
}
