'use client';

import {Icon} from '@/lib/icon';
import {Dialog} from '@ark-ui/react';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {useRouter} from 'next/navigation';
import {type PropsWithChildren, useEffect, useState} from 'react';
import {twMerge} from 'tailwind-merge';

export function Modal({children}: PropsWithChildren) {
	const router = useRouter();
	const [open, setOpen] = useState(true);

	useEffect(() => {
		return () => {
			setOpen(true);
		};
	}, []);

	return (
		<Dialog.Root
			open={open}
			onOpenChange={({open}) => {
				if (!open) {
					setOpen(false);
					setTimeout(() => {
						router.back();
					}, 150);
				}
			}}
		>
			<Dialog.Backdrop className="fixed inset-0 z-overlay backdrop-blur-sm bg-gray-true-900/50 dark:bg-gray-true-900/50" />

			<Dialog.Positioner>
				<Dialog.Content className="fixed w-full bottom-0 right-0 z-modal p-4 md:p-6 lg:p-8 border-t border-gray-true-400 dark:border-gray-true-800 data-open:animate-slide-up data-closed:animate-slide-down bg-white dark:bg-gray-true-900">
					<div
						className={twMerge(
							'w-full lg:w-[40rem] max-w-full lg:max-w-[40rem]',
							'[&_.shiki]:max-h-[50vh]',
						)}
					>
						{children}
					</div>

					<Dialog.CloseTrigger className="absolute right-3 top-3 p-1 cursor-pointer">
						<Icon className="size-6">
							<XCloseIcon />
						</Icon>
					</Dialog.CloseTrigger>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}
