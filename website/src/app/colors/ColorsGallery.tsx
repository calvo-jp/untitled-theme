'use client';

import {Clipboard} from '@ark-ui/react';
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-react';
import {useSearchParams} from 'next/navigation';
import {Color} from './types';

export interface ColorsGalleryProps {
	colors: Color[];
}

export function ColorsGallery(props: ColorsGalleryProps) {
	const searchParams = useSearchParams();

	const colors = !searchParams.has('search')
		? props.colors
		: props.colors.filter((c) => {
				return c.parent
					.join('')
					.replace(/-/g, '')
					.toLowerCase()
					.includes(
						searchParams.get('search')?.replace(/\s+/g, '').toLowerCase() ?? '',
					);
			});

	return (
		<div className="mt-5 flex flex-col gap-4 font-mono lg:mt-8 lg:gap-6">
			{colors.map(({parent, children}, idx_0) => {
				const name = parent.join('.');
				const pairs = Object.entries(children);

				return (
					<div className="group flex flex-col gap-2" key={idx_0}>
						{parent.length > 0 && (
							<div className="flex items-center gap-2">
								<div className="font-medium">{name}</div>

								<Clipboard.Root
									value={JSON.stringify({[name]: children}, null, 2)}
									className="flex transition-transform duration-150 focus-within:scale-100 group-hover:scale-100 lg:scale-0"
								>
									<Clipboard.Trigger className="cursor-pointer">
										<Clipboard.Indicator
											copied={
												<CheckIcon className="size-5 text-emerald-500 dark:text-emerald-400" />
											}
										>
											<Copy01Icon className="size-5" />
										</Clipboard.Indicator>
									</Clipboard.Trigger>
								</Clipboard.Root>
							</div>
						)}

						<div className="grid grid-cols-6 gap-1 md:grid-cols-12 lg:gap-2">
							{pairs.map(([k, v], idx_1) => (
								<div key={idx_1}>
									<div
										className="aspect-square bg-[var(--bg)]"
										style={{
											['--bg' as string]: v,
										}}
									/>
									<div className="mt-2 hidden text-sm lg:block">{k}</div>
									<div className="hidden text-xs leading-none text-neutral-700 lg:block dark:text-neutral-500">
										{v}
									</div>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}
