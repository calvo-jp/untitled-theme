'use client';

import {useMounted} from '@/lib/use-mounted';
import {Select, ark} from '@ark-ui/react';
import {CheckIcon, CloudMoonIcon, CloudSun02Icon, Monitor01Icon} from '@untitled-theme/icons-react';
import {useTheme} from 'next-themes';

export function Theme() {
  const theme = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  const selected = themes.find(({value}) => theme.theme === value) ?? themes[0];

  return (
    <Select.Root
      items={themes}
      value={[selected.value]}
      onValueChange={(o) => {
        theme.setTheme(o.value[0]);
        console.log(o);
      }}
      lazyMount
      unmountOnExit
    >
      <Select.Control>
        <Select.Trigger className="flex aspect-square items-center gap-2 rounded border px-2 py-1">
          <Select.ValueText className="flex grow items-center gap-1 text-left">
            <ark.svg className="h-5 w-5" asChild>
              {selected.icon}
            </ark.svg>
            <span className="sr-only">{selected.label}</span>
          </Select.ValueText>
        </Select.Trigger>
      </Select.Control>

      <Select.Positioner className="z-modal">
        <Select.Content className="rounded border bg-white p-2 dark:bg-gray-true-900">
          {themes.map(({icon, label, value}) => (
            <Select.Item
              key={value}
              item={{
                icon,
                label,
                value,
              }}
              className="flex w-36 cursor-default items-center gap-4 rounded px-2 py-1 data-highlighted:bg-gray-true-50 dark:data-highlighted:bg-gray-true-800/10"
            >
              <Select.ItemText className="flex grow items-center gap-2">
                <ark.svg asChild className="h-4 w-4">
                  {icon}
                </ark.svg>
                <ark.span>{label}</ark.span>
              </Select.ItemText>
              <Select.ItemIndicator>
                <CheckIcon className="h-4 w-4 text-success-500 dark:text-success-300" />
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
