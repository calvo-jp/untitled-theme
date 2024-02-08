'use client';

import {ThemeProvider} from 'next-themes';
import {PropsWithChildren} from 'react';

export function Providers({children}: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      enableColorScheme={false}
      disableTransitionOnChange
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  );
}
