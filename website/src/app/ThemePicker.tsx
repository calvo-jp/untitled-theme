'use client';

import {createListCollection, Select} from '@ark-ui/react';
import {
	CheckIcon,
	CloudMoonIcon,
	CloudSun02Icon,
	Monitor01Icon,
} from '@untitled-theme/icons-react';
import {useTheme} from 'next-themes';

const items = [
	{
		label: 'System',
		value: 'system',
		icon: <Monitor01Icon />,
	},
	{
		label: 'Light',
		value: 'light',
		icon: <CloudSun02Icon />,
	},
	{
		label: 'Dark',
		value: 'dark',
		icon: <CloudMoonIcon />,
	},
];

const collection = createListCollection({
	items,
	itemToValue: (item) => item.value,
	itemToString: (item) => item.label,
});

export function ThemePicker() {
	const {theme, setTheme} = useTheme();

	const selected = collection.items.find((o) => o.value === theme);

	return (
		<Select.Root
			collection={collection}
			value={theme ? [theme] : []}
			onValueChange={(details) => {
				const value = details.value.at(0);
				if (value) setTheme(value);
			}}
		>
			<Select.Control>
				<Select.Trigger className="flex aspect-square icon:size-5 cursor-pointer items-center gap-2 rounded-md px-2 py-1">
					{!!selected && (
						<>
							{selected.icon}
							<span className="sr-only">{selected.label}</span>
						</>
					)}
				</Select.Trigger>
			</Select.Control>
			<Select.Positioner className="z-dropdown">
				<Select.Content className="ui-closed:animate-fade-out ui-open:animate-fade-in rounded-md border border-neutral-300 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-900">
					{collection.items.map((item) => (
						<Select.Item
							key={item.value}
							item={item}
							className="pointer flex w-32 cursor-pointer items-center gap-4 rounded-md ui-highlighted:bg-neutral-50 px-2 py-1 dark:ui-highlighted:bg-neutral-800/25"
						>
							<Select.ItemText className="flex icon:size-5 grow items-center gap-2">
								{item.icon}
								<span>{item.label}</span>
							</Select.ItemText>
							<Select.ItemIndicator asChild>
								<CheckIcon className="!size-4 shrink-0 text-emerald-500 dark:text-emerald-400" />
							</Select.ItemIndicator>
						</Select.Item>
					))}
				</Select.Content>
			</Select.Positioner>
		</Select.Root>
	);
}
