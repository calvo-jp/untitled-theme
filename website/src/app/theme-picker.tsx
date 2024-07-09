'use client';

import {Icon} from '@/lib/icon';
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
						<Icon>{selected.icon}</Icon>
						<span className="sr-only">{selected.label}</span>
					</Select.ValueText>
				</Select.Trigger>
			</Select.Control>

			<Select.Positioner className="z-dropdown">
				<Select.Content className="rounded-md border p-2 bg-white dark:bg-gray-true-900 data-open:animate-fade-in data-closed:animate-fade-out">
					{themes.map(({icon, label, value}) => (
						<Select.Item
							key={value}
							item={{
								icon,
								label,
								value,
							}}
							className="w-32 px-2 py-1 flex items-center gap-4 pointer rounded-md data-highlighted:bg-gray-true-50 dark:data-highlighted:bg-gray-true-800/25"
						>
							<Select.ItemText className="flex items-center grow gap-2">
								<Icon className="w-4 h-4">{icon}</Icon>
								<span>{label}</span>
							</Select.ItemText>
							<Select.ItemIndicator>
								<Icon className="w-4 h-4 text-success-500 dark:text-success-400">
									<CheckIcon />
								</Icon>
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
		icon: <Monitor01Icon />,
		label: 'System',
		value: 'system',
	},
	{
		icon: <CloudSun02Icon />,
		label: 'Light',
		value: 'light',
	},
	{
		icon: <CloudMoonIcon />,
		label: 'Dark',
		value: 'dark',
	},
];
