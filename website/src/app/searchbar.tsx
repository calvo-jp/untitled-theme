'use client';

import {SearchLgIcon} from '@untitled-theme/icons-react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export function Searchbar() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  return (
    <div className="relative">
      <input
        defaultValue={params.get('search')?.toString()}
        onChange={(e) => {
          const newParams = new URLSearchParams(params);

          if (e.target.value) {
            newParams.set('search', e.target.value);
          } else {
            newParams.delete('search');
          }

          router.replace(`${pathname}?${newParams.toString()}`);
        }}
        placeholder="Search"
        className="h-12 w-full rounded border py-2 pl-12 pr-4 outline-none focus:shadow-outline"
      />

      <SearchLgIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-true-500 dark:text-gray-true-600" />
    </div>
  );
}
