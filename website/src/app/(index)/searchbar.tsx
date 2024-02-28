'use client';

import {SearchLgIcon, XCloseIcon} from '@untitled-theme/icons-react';
import * as React from 'react';
import {twMerge} from 'tailwind-merge';
import {usePageContext} from './page-context';

export function Searchbar() {
  const context = usePageContext();
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        value={context.searchKeyword}
        onChange={(e) => {
          context.search(e.target.value);
        }}
        placeholder="Search"
        className={twMerge(
          'h-12 w-full rounded border py-2 pl-12 outline-none',
          context.searchKeyword ? 'pr-10' : 'pr-4',
        )}
      />

      <SearchLgIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-true-500 dark:text-gray-true-600" />

      <button
        type="button"
        onClick={() => {
          context.search.stop();
          inputRef.current?.focus();
        }}
        className={twMerge(
          'absolute right-4 top-1/2 -translate-y-1/2',
          !context.search && 'hidden',
        )}
      >
        <XCloseIcon className="h-5 w-5" />
        <span className="sr-only">Clear</span>
      </button>
    </div>
  );
}
