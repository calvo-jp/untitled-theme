'use client';

import {type HTMLArkProps, ark} from '@ark-ui/react/factory';
import {forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';

export const Icon = forwardRef<SVGSVGElement, HTMLArkProps<'svg'>>(
	({className, children, ...props}, ref) => {
		return (
			<ark.svg
				ref={ref}
				className={twMerge(className, 'w-5 h-5')}
				strokeWidth="1.66667"
				asChild
				{...props}
			>
				{children}
			</ark.svg>
		);
	},
);

Icon.displayName = 'Icon';
