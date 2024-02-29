'use client';

import {ThemeProvider} from 'next-themes';
import type {PropsWithChildren} from 'react';

export function Providers(props: PropsWithChildren) {
  return (
    <ThemeProvider
      themes={['system', 'dark', 'light']}
      defaultTheme="system"
      attribute="data-theme"
      enableSystem
      disableTransitionOnChange
    >
      {props.children}
    </ThemeProvider>
  );
}
