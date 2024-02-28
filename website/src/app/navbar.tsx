import {Theme} from './theme';

export function Navbar() {
  return (
    <header className="sticky top-0 z-sticky flex h-[4.5rem] items-center gap-2 border-b bg-white/75 p-4 backdrop-blur-sm dark:bg-gray-true-900/80">
      <div className="flex items-center gap-3 rounded-sm bg-gray-true-100 px-3 py-2.5 dark:bg-gray-true-700/10">
        <code className="flex items-center gap-1.5 text-xs">
          <span className="text-warning-700 dark:text-warning-500">pnpm</span>
          <span className="text-gray-600 dark:text-gray-true-400">install</span>
          <span className="text-brand-700 dark:text-brand-500">
            {'@untitled-theme/icons-{react|svelte}'}
          </span>
        </code>
      </div>

      <div className="grow" />

      <Theme />
    </header>
  );
}
