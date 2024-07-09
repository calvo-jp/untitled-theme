'use client';

import {useTheme} from '@/lib/theme-provider';
import {Select} from '@ark-ui/react';
import {CheckIcon, CloudMoonIcon, CloudSun02Icon, Monitor01Icon} from '@untitled-theme/icons-react';

export function ThemePicker() {
	const [theme, setTheme] = useTheme();

	const selected = themes.find(({value}) => theme === value) ?? themes[0];

	return (
		<Select.Root
			items={themes}
			value={[selected.value]}
			onValueChange={(o) => {
				setTheme(o.value[0]);
			}}
			lazyMount
			unmountOnExit
		>
			<Select.Control>
				<Select.Trigger className="flex items-center gap-2 rounded-md borer px-2 py-1 aspect-square">
					<Select.ValueText className="flex grow items-center gap-1 text-left">
						<selected.icon className="icon-lg" />
						<span className="sr-only">{selected.label}</span>
					</Select.ValueText>
				</Select.Trigger>
			</Select.Control>

			<Select.Positioner className="z-dropdown">
				<Select.Content className="rounded-md border p-2 bg-white dark:bg-gray-true-900 data-open:animate-fade-in data-closed:animate-fade-out">
					{themes.map((o) => (
						<Select.Item
							key={o.value}
							item={o}
							className="w-32 px-2 py-1 flex items-center gap-4 pointer rounded-md data-highlighted:bg-gray-true-50 dark:data-highlighted:bg-gray-true-800/25"
						>
							<Select.ItemText className="flex items-center grow gap-2">
								<o.icon className="icon" />
								<span>{o.label}</span>
							</Select.ItemText>
							<Select.ItemIndicator>
								<CheckIcon className="icon text-success-500 dark:text-success-400" />
							</Select.ItemIndicator>
						</Select.Item>
					))}
				</Select.Content>
			</Select.Positioner>
		</Select.Root>
	);
}

const themes = [
	{
		label: 'System',
		value: 'system',
		icon: Monitor01Icon,
	},
	{
		label: 'Light',
		value: 'light',
		icon: CloudSun02Icon,
	},
	{
		label: 'Dark',
		value: 'dark',
		icon: CloudMoonIcon,
	},
];
