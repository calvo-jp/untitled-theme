import {ThemePicker} from './theme-picker';

export function Navbar() {
  return (
    <header className="sticky top-0 z-sticky flex h-[4.5rem] items-center gap-2 border-b bg-white/75 p-4 backdrop-blur-sm dark:bg-gray-true-900/80">
      <div className="flex items-center gap-3 rounded-sm bg-gray-true-100 px-3 py-2.5 dark:bg-gray-true-700/10">
        <code className="flex items-center gap-1.5 text-xs">
          <span className="hidden text-warning-700 md:block dark:text-warning-500">pnpm</span>
          <span className="text-gray-600 hidden md:block dark:text-gray-true-400">install</span>
          <span className="hidden text-brand-700 lg:block dark:text-brand-500">
            {'@untitled-theme/icons-{react|svelte}'}
          </span>
          <span className="text-brand-700 lg:hidden dark:text-brand-500">{'@untitled-theme'}</span>
        </code>
      </div>

      <div className="grow" />

      <ThemePicker />
    </header>
  );
}
