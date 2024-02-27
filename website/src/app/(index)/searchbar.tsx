'use client';

import {Presence, ark} from '@ark-ui/react';
import {SearchLgIcon, XCloseIcon} from '@untitled-theme/icons-react';
import * as React from 'react';
import {useContext} from './context';

export function Searchbar() {
  const context = useContext();
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <ark.div className="relative">
      <ark.input
        ref={inputRef}
        value={context.search}
        onChange={(e) => context.setSearch(e.target.value)}
        placeholder="Search"
        className="w-full pl-12 pr-4 py-2 h-12 border border-gray-true-200 rounded outline-none placeholder:text-gray-true-400"
      />

      <SearchLgIcon className="absolute text-gray-true-500 pointer-events-none top-1/2 -translate-y-1/2 left-4" />

      <Presence present={Boolean(context.search)}>
        <ark.button
          type="button"
          onClick={() => {
            context.setSearch('');
            inputRef.current?.focus();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <XCloseIcon className="w-5 h-5" />
          <ark.span className="sr-only">Clear</ark.span>
        </ark.button>
      </Presence>
    </ark.div>
  );
}
