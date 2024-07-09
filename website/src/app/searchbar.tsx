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
				className="h-12 w-full py-2 pl-12 pr-4 rounded border outline-none bg-transparent"
			/>

			<SearchLgIcon className="icon-xl absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-true-300 dark:text-gray-true-400" />
		</div>
	);
}
