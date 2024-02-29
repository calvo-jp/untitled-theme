'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react';
import type {Icon} from './types';

export const PageContext = createContext(undefined as unknown as UsePageReturn);
export const usePageContext = () => useContext(PageContext);
export const PageProvider = (props: PropsWithChildren<UsePageProps>) => {
  const context = usePage(props);

  return (
    <PageContext.Provider value={useMemo(() => context, [context])}>
      {props.children}
    </PageContext.Provider>
  );
};

interface UsePageProps {
  items?: Icon[];
}

type UsePageReturn = ReturnType<typeof usePage>;

function usePage(props: UsePageProps) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const search = (keyword: string) => setSearchKeyword(keyword);
  search.stop = () => setSearchKeyword('');

  const icons = useMemo(() => {
    if (!props.items) return [];

    return props.items.filter((item) => {
      return item.displayName
        .toLowerCase()
        .replace(/ /g, '')
        .includes(searchKeyword.toLowerCase().replace(/ /g, ''));
    });
  }, [props.items, searchKeyword]);

  const iconsCount = icons.length;

  const [inspectionSubject, setInspectionSubject] = useState<Icon | null>();
  const inspect = (subject: Icon) => setInspectionSubject(subject);
  inspect.dismiss = () => setInspectionSubject(null);

  useEffect(() => {
    return function reset() {
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
