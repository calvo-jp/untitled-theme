'use client';

import {ThemeProvider} from 'next-themes';
import {PropsWithChildren} from 'react';

export function Providers(props: PropsWithChildren) {
  return (
    <ThemeProvider
      themes={['system', 'dark', 'light']}
      defaultTheme="system"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      {props.children}
    </ThemeProvider>
  );
}
