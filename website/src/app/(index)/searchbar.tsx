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
          'w-full pl-12 py-2 h-12 border rounded outline-none',
          context.search ? 'pr-10' : 'pr-4',
        )}
      />

      <SearchLgIcon className="absolute text-gray-true-500 pointer-events-none top-1/2 -translate-y-1/2 left-4 dark:text-gray-true-600" />

      <button
        type="button"
        onClick={() => {
          context.setSearch('');
          inputRef.current?.focus();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 data-closed:scale-0 data-open:scale-100 data-closed:opacity-0 data-open:opacity-100 transition-all duration-300 ease-in-out"
      >
        <XCloseIcon className="w-5 h-5" />
        <span className="sr-only">Clear</span>
      </button>
    </div>
  );
}
