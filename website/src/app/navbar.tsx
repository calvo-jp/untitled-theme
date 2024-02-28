import {Moon01Icon} from '@untitled-theme/icons-react';

export function Navbar() {
  return (
    <header className="flex items-center gap-2 border-b p-4">
      <div className="flex items-center gap-3 rounded-sm bg-gray-true-700/10 px-3 py-2.5">
        <code className="flex items-center gap-1.5 text-xs">
          <span className="text-warning-500">pnpm</span>
          <span className="text-gray-true-400">install</span>
          <span className="text-brand-500">{'@untitled-theme/icons-{react|svelte}'}</span>
        </code>
      </div>

      <div className="grow" />

      <div className="flex items-center">
        <button className="rounded border p-1.5">
          <Moon01Icon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
