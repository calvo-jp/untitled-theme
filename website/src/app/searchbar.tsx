'use client';

import {Icon} from '@/lib/icon';
import {Box, styled} from '@/styled-system/jsx';
import {SearchLgIcon} from '@untitled-theme/icons-react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export function Searchbar() {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  return (
    <Box pos="relative">
      <styled.input
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
        h="12"
        w="full"
        py="2"
        pl="12"
        pr="4"
        rounded="sm"
        borderWidth="1px"
        outline="none"
      />

      <Icon
        w="6"
        h="6"
        pos="absolute"
        left="4"
        top="50%"
        transform="translateY(-50%)"
        pointerEvents="none"
        color={{
          base: 'gray-true.300',
          _dark: 'gray-true.400',
        }}
      >
        <SearchLgIcon />
      </Icon>
    </Box>
  );
}
