'use client';

import {Icon} from '@/lib/icon';
import {
	Select,
	SelectContent,
	SelectControl,
	SelectItem,
	SelectItemIndicator,
	SelectItemText,
	SelectPositioner,
	SelectTrigger,
	SelectValueText,
} from '@/lib/select';
import {useTheme} from '@/lib/theme';
import {VisuallyHidden, styled} from '@/styled-system/jsx';
import {CheckIcon, CloudMoonIcon, CloudSun02Icon, Monitor01Icon} from '@untitled-theme/icons-react';

export function ThemePicker() {
	const [theme, setTheme] = useTheme();

	const selected = themes.find(({value}) => theme === value) ?? themes[0];

	return (
		<Select
			items={themes}
			value={[selected.value]}
			onValueChange={(o) => {
				setTheme(o.value[0]);
			}}
			lazyMount
			unmountOnExit
		>
			<SelectControl>
				<SelectTrigger
					display="flex"
					alignItems="center"
					gap="2"
					rounded="md"
					borderWidth="1px"
					px="2"
					py="1"
					aspectRatio="square"
				>
					<SelectValueText display="flex" flexGrow={1} alignItems="center" gap="1" textAlign="left">
						<Icon>{selected.icon}</Icon>
						<VisuallyHidden>{selected.label}</VisuallyHidden>
					</SelectValueText>
				</SelectTrigger>
			</SelectControl>

			<SelectPositioner zIndex="dropdown">
				<SelectContent
					rounded="md"
					borderWidth="1px"
					p="2"
					bg={{
						base: 'white',
						_dark: 'gray-true.900',
					}}
					_open={{
						animation: 'fade-in',
					}}
					_closed={{
						animation: 'fade-out',
					}}
				>
					{themes.map(({icon, label, value}) => (
						<SelectItem
							key={value}
							item={{
								icon,
								label,
								value,
							}}
							w="32"
							px="2"
							py="1"
							display="flex"
							alignItems="center"
							gap="4"
							cursor="pointer"
							rounded="md"
							_highlighted={{
								bg: {
									base: 'gray-true.50',
									_dark: 'gray-true.800/25',
								},
							}}
						>
							<SelectItemText display="flex" alignItems="center" flexGrow="1" gap="2">
								<Icon w="4" h="4">
									{icon}
								</Icon>
								<styled.span>{label}</styled.span>
							</SelectItemText>
							<SelectItemIndicator>
								<Icon
									w="4"
									h="4"
									color={{
										base: 'success.500',
										_dark: 'success.400',
									}}
								>
									<CheckIcon />
								</Icon>
							</SelectItemIndicator>
						</SelectItem>
					))}
				</SelectContent>
			</SelectPositioner>
		</Select>
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
