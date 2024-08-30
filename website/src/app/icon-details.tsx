import {Clipboard, Tabs} from '@ark-ui/react';
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-react';
import {twMerge} from 'tailwind-merge';
import type {GetIconReturn} from './utils';

export async function IconDetails({data}: {data: GetIconReturn}) {
	const items = [
		{
			label: 'Html',
			value: 'Html',
			content: data.snippet.html,
		},
		{
			label: 'React',
			value: 'React',
			content: data.snippet.react,
		},
		{
			label: 'Svelte',
			value: 'Svelte',
			content: data.snippet.svelte,
		},
		{
			label: 'Solid',
			value: 'Solid',
			content: data.snippet.solid,
		},
	];

	const componentName = `<${data.name.pascal} />`;

	return (
		<div>
			<div
				className="w-fit p-3 rounded border"
				dangerouslySetInnerHTML={{
					__html: data.html,
				}}
			/>

			<div className="w-fit py-2 px-3 mt-5 max-h-dvh flex items-center gap-5 rounded overflow-y-auto bg-gray-true-100 dark:bg-gray-true-800/25">
				<code className="font-mono">{componentName}</code>
				<Clipboard.Root className="flex" value={componentName}>
					<Clipboard.Trigger className="p-1">
						<Clipboard.Indicator
							copied={<CheckIcon className="icon text-success-500 dark:text-success-700" />}
						>
							<Copy01Icon className="icon" />
						</Clipboard.Indicator>
					</Clipboard.Trigger>
				</Clipboard.Root>
			</div>

			<Tabs.Root className="mt-5" defaultValue={items[0].value}>
				<Tabs.List className="flex gap-4">
					{items.map((item) => (
						<Tabs.Trigger
							key={item.value}
							value={item.value}
							className="data-selected:text-brand-700 dark:data-selected:text-brand-500"
						>
							{item.label}
						</Tabs.Trigger>
					))}
				</Tabs.List>

				{items.map((item) => {
					return (
						<Tabs.Content key={item.value} value={item.value} className="text-sm relative mt-5">
							<Clipboard.Root
								value={item.content.raw}
								className="absolute top-4 right-4 flex items-center justify-center rounded-lg p-0.5"
							>
								<Clipboard.Trigger className="p-0.5">
									<Clipboard.Indicator
										copied={<CheckIcon className="icon text-success-500 dark:text-success-700" />}
									>
										<Copy01Icon className="icon" />
									</Clipboard.Indicator>
								</Clipboard.Trigger>
							</Clipboard.Root>

							<div
								className={twMerge(
									'[&_.shiki]:p-4',
									'[&_.shiki]:h-full',
									'[&_.shiki]:rounded',
									'[&_.shiki]:overflow-auto',
									'[&_.shiki]:border',
									'[&_.shiki]:font-mono',
									'[&_.shiki]:bg-[var(--shiki-light-bg)]',
									'[&_.shiki]:text-[var(--shiki-light)]',
									'[&_.shiki]:dark:bg-[var(--shiki-dark-bg)]',
									'[&_.shiki]:dark:text-[var(--shiki-dark)]',

									'[&_.shiki_span]:bg-[var(--shiki-light-bg)]',
									'[&_.shiki_span]:text-[var(--shiki-light)]',
									'[&_.shiki_span]:dark:bg-[var(--shiki-dark-bg)]',
									'[&_.shiki_span]:dark:text-[var(--shiki-dark)]',
								)}
								dangerouslySetInnerHTML={{
									__html: item.content.html,
								}}
							/>
						</Tabs.Content>
					);
				})}
			</Tabs.Root>
		</div>
	);
}
