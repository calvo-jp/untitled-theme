import type {Metadata} from 'next';
import {Fira_Code, Inter} from 'next/font/google';
import {twMerge} from 'tailwind-merge';
import './globals.css';

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
    <html
      lang="en"
      className={twMerge(sans.variable, mono.variable, 'scroll-smooth lg:overflow-y-scroll')}
    >
      <body className="font-sans bg-white text-gray-true-800 min-h-dvh">
        <main className="max-w-screen-lg mx-auto p-12">{children}</main>
      </body>
    </html>
  );
}
