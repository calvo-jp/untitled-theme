import {styled} from '@/styled-system/jsx';
import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {PropsWithChildren} from 'react';
import './globals.css';

const sans = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  preload: true,
  variable: '--font-sans',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Recipes',
    template: '%s | Recipes',
  },
};

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <styled.html
      lang="en"
      className={sans.className}
      scrollBehavior="smooth"
      colorScheme={{
        base: 'light',
        _dark: 'dark',
      }}
      suppressHydrationWarning
    >
      <styled.body fontFamily="sans">
        <styled.main>{children}</styled.main>
      </styled.body>
    </styled.html>
  );
}
