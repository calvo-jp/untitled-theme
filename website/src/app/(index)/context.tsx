'use client';

import * as React from 'react';
import {Item} from './types';

interface T {
  items: Item[];
  count: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = React.createContext<T>(undefined as unknown as T);

interface ProviderProps {
  /**
   * all items
   * @default []
   */
  items?: Item[];
}

export function Provider(props: React.PropsWithChildren<ProviderProps>) {
  const [search, setSearch] = React.useState('');

  const items = !props.items
    ? []
    : props.items.filter((item) => {
        return item.name
          .toLowerCase()
          .replace(/ /g, '')
          .includes(search.toLowerCase().replace(/ /g, ''));
      });

  const count = items.length;

  return (
    <Context.Provider
      value={{
        items,
        count,
        search,
        setSearch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export function useContext() {
  return React.useContext(Context);
}
