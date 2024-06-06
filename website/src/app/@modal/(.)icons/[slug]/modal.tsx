'use client';

import {
	Dialog,
	DialogBackdrop,
	DialogCloseTrigger,
	DialogContent,
	DialogPositioner,
} from '@/lib/dialog';
import {Icon} from '@/lib/icon';
import {Box} from '@/styled-system/jsx';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {useRouter} from 'next/navigation';
import {useEffect, useState, type PropsWithChildren} from 'react';

export function Modal({children}: PropsWithChildren) {
	const router = useRouter();
	const [open, setOpen] = useState(true);

	useEffect(() => {
		return () => {
			setOpen(true);
		};
	}, []);

	return (
		<Dialog
			open={open}
			onOpenChange={({open}) => {
				if (!open) {
					setOpen(false);
					setTimeout(() => {
						router.back();
					}, 300);
				}
			}}
		>
			<DialogBackdrop
				pos="fixed"
				inset="0"
				zIndex="overlay"
				backdropFilter="blur(4px)"
				bg={{
					base: 'gray-true.100/50',
					_dark: 'gray-true.900/50',
				}}
			/>

			<DialogPositioner>
				<DialogContent
					pos="fixed"
					w="full"
					bottom="0"
					right="0"
					zIndex="modal"
					p={{
						base: '4',
						md: '6',
						lg: '8',
					}}
					bg={{
						base: 'white',
						_dark: 'gray-true.900',
					}}
					borderTopWidth="1px"
					borderColor={{
						base: 'gray-true.400',
						_dark: 'gray-true.800',
					}}
					_open={{
						animation: 'slide-up',
					}}
					_closed={{
						animation: 'slide-down',
					}}
				>
					<Box
						css={{
							w: {
								base: 'full',
								lg: '40rem',
							},
							maxW: {
								base: 'full',
								lg: '75%',
							},
							'& .shiki': {
								maxHeight: '50vh',
							},
						}}
					>
						{children}
					</Box>

					<DialogCloseTrigger pos="absolute" right="3" top="3" p="1" cursor="pointer">
						<Icon w="6" h="6">
							<XCloseIcon />
						</Icon>
					</DialogCloseTrigger>
				</DialogContent>
			</DialogPositioner>
		</Dialog>
	);
}
