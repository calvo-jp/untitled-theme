'use client';

import {SearchLgIcon, XCloseIcon} from '@untitled-theme/icons-react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {CSSProperties, useState} from 'react';
import {twMerge} from 'tailwind-merge';
import {useDebounceCallback} from 'usehooks-ts';

export interface SearchbarProps {
  id?: string;
  style?: CSSProperties;
  className?: string;
}

export function Searchbar(props: SearchbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get('search') ?? '';

  const setValue = useDebounceCallback(async (newValue: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newValue.trim().length < 1) {
      newSearchParams.delete('search');
    } else {
      newSearchParams.set('search', newValue);
    }

    const queryString = newSearchParams.toString();
    const newPath = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(newPath, {scroll: false});
  }, 250);

  const [internalValue, setInternalValue] = useState(value);

  return (
    <div {...props} className={twMerge(props.className, 'relative')}>
      <SearchLgIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-300 dark:text-neutral-400" />

      <input
        value={internalValue}
        onChange={(e) => {
          setValue(e.target.value);
          setInternalValue(e.target.value);
        }}
        placeholder="Search"
        className="h-12 w-full rounded border border-neutral-300 bg-transparent px-12 py-2 outline-none dark:border-neutral-800"
      />

      {value.length > 0 && (
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          tabIndex={-1}
          onClick={() => {
            setValue('');
            setInternalValue('');
          }}
        >
          <XCloseIcon className="size-4" />
        </button>
      )}
    </div>
  );
}
