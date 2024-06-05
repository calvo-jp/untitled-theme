'use client';

import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';

export const Icon = styled(
	ark.svg,
	{
		base: {
			w: 5,
			h: 5,
		},
	},
	{
		shouldForwardProp(key) {
			return ['strokeWidth'].includes(key);
		},
		defaultProps: {
			asChild: true,
			strokeWidth: '1.66667',
		},
	},
);
