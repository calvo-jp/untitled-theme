'use client';

import {createContext, useContext, useEffect, useState, type PropsWithChildren} from 'react';
import type {Icon} from './types';

export const PageContext = createContext(undefined as unknown as UsePageReturn);
export const usePageContext = () => useContext(PageContext);
export const PageProvider = (props: PropsWithChildren<UsePageProps>) => (
  <PageContext.Provider value={usePage(props)}>{props.children}</PageContext.Provider>
);

interface UsePageProps {
  items?: Icon[];
}

type UsePageReturn = ReturnType<typeof usePage>;

function usePage(props: UsePageProps) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const search = (keyword: string) => setSearchKeyword(keyword);
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

  const [inspectionSubject, setInspectionSubject] = useState<Icon | null>();
  const inspect = (subject: Icon) => setInspectionSubject(subject);
  inspect.dismiss = () => setInspectionSubject(null);

  useEffect(() => {
    return () => {
      setSearchKeyword('');
      setInspectionSubject(null);
    };
  }, []);

  return {
    icons,
    iconsCount,
    search,
    searchKeyword,
    inspect,
    inspectionSubject,
  };
}
