import {Theme} from './theme';

export function Navbar() {
  return (
    <header className="z-sticky sticky top-0 flex items-center gap-2 border-b bg-gray-true-900/80 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-3 rounded-sm bg-gray-true-700/10 px-3 py-2.5">
        <code className="flex items-center gap-1.5 text-xs">
          <span className="text-warning-500">pnpm</span>
          <span className="text-gray-true-400">install</span>
          <span className="text-brand-500">{'@untitled-theme/icons-{react|svelte}'}</span>
        </code>
      </div>

      <div className="grow" />

      <Theme />
    </header>
  );
}
