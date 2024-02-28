'use client';

import {SearchLgIcon, XCloseIcon} from '@untitled-theme/icons-react';
import * as React from 'react';
import {twMerge} from 'tailwind-merge';
import {useContext} from './context';

export function Searchbar() {
  const context = useContext();
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={context.search}
        onChange={(e) => {
          context.setSearch(e.target.value);
        }}
        placeholder="Search"
        className={twMerge(
          'h-12 w-full rounded border py-2 pl-12 outline-none',
          context.search ? 'pr-10' : 'pr-4',
        )}
      />

      <SearchLgIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-true-500 dark:text-gray-true-600" />

      <button
        type="button"
        onClick={() => {
          context.setSearch('');
          inputRef.current?.focus();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out data-open:scale-100 data-open:opacity-100 data-closed:scale-0 data-closed:opacity-0"
      >
        <XCloseIcon className="h-5 w-5" />
        <span className="sr-only">Clear</span>
      </button>
    </div>
  );
}
