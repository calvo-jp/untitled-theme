import {Asterisk02Icon} from '@untitled-theme/icons-react';
import Link from 'next/link';
import {ThemePicker} from './theme-picker';

export function Navbar() {
  return (
    <header className="sticky top-0 z-sticky flex h-16 items-center gap-2 border-b bg-white/75 p-4 backdrop-blur-sm dark:bg-gray-true-900/80">
      <Link
        href="/"
        className="flex items-center rounded-sm bg-gray-true-100 px-3.5 py-2 font-mono text-sm text-brand-700 dark:bg-gray-true-700/10 dark:text-brand-500"
      >
        <span>@untitled-theme/icons-</span>
        <Asterisk02Icon className="h-3 w-3" />
      </Link>

      <div className="grow" />

      <ThemePicker />
    </header>
  );
}
