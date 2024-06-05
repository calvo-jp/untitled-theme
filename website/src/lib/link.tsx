'use client';

import {styled} from '@/styled-system/jsx';
import NextLink from 'next/link';

export const Link = styled(
	NextLink,
	{},
	{
		shouldForwardProp(key) {
			return [
				/**/
				'href',
				'replace',
				'scroll',
				'prefetch',
			].includes(key);
		},
	},
);
