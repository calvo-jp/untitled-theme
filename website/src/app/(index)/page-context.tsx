'use client';

import * as React from 'react';
import type {Icon} from './types';

export const PageContext = React.createContext(undefined as unknown as UsePageReturn);
export const usePageContext = () => React.useContext(PageContext);
export const PageProvider = (props: React.PropsWithChildren<UsePageProps>) => (
  <PageContext.Provider value={usePage(props)}>{props.children}</PageContext.Provider>
);

interface UsePageProps {
  items?: Icon[];
}

type UsePageReturn = ReturnType<typeof usePage>;

function usePage(props: UsePageProps) {
  const [searchKeyword, setSearchKeyword] = React.useState('');

  const search = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  search.stop = () => setSearchKeyword('');

  const icons = !props.items
    ? []
    : props.items.filter((item) => {
        return item.displayName
          .toLowerCase()
          .replace(/ /g, '')
          .includes(searchKeyword.toLowerCase().replace(/ /g, ''));
      });

  const iconsCount = icons.length;

  const [inspectionSubject, setInspectionSubject] = React.useState<Icon>();

  const inspect = (item: Icon) => {
    setInspectionSubject(item);
  };

  inspect.dismiss = () => {
    setInspectionSubject(undefined);
  };

  return {
    icons,
    iconsCount,
    search,
    searchKeyword,
    inspect,
    inspectionSubject,
  };
}
