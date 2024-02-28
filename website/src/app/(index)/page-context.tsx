'use client';

import * as React from 'react';
import {Item} from './types';

export const PageContext = React.createContext(undefined as unknown as UsePageReturn);
export const usePageContext = () => React.useContext(PageContext);
export const PageProvider = (props: React.PropsWithChildren<UsePageProps>) => (
  <PageContext.Provider value={usePage(props)}>{props.children}</PageContext.Provider>
);

interface UsePageProps {
  items?: Item[];
}

type UsePageReturn = ReturnType<typeof usePage>;

function usePage(props: UsePageProps) {
  const [searchKeyword, setSearchKeyword] = React.useState('');

  const search = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  search.stop = () => setSearchKeyword('');

  const items = !props.items
    ? []
    : props.items.filter((item) => {
        return item.name
          .toLowerCase()
          .replace(/ /g, '')
          .includes(searchKeyword.toLowerCase().replace(/ /g, ''));
      });

  const itemsCount = items.length;

  const [inspectionSubject, setInspectionSubject] = React.useState<Item>();

  const inspect = (item: Item) => {
    setInspectionSubject(item);
  };

  inspect.dismiss = () => {
    setInspectionSubject(undefined);
  };

  return {
    items,
    itemsCount,
    search,
    searchKeyword,
    inspect,
    inspectionSubject,
  };
}
