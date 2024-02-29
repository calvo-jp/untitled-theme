'use client';

import {Select, ark} from '@ark-ui/react';
import {CheckIcon, CloudMoonIcon, CloudSun02Icon, Monitor01Icon} from '@untitled-theme/icons-react';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

export function ThemePicker() {
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
      }}
      lazyMount
      unmountOnExit
    >
      <Select.Control>
        <Select.Trigger className="focus:shadow-outline flex aspect-square items-center gap-2 rounded border px-2 py-1">
          <Select.ValueText className="flex grow items-center gap-1 text-left">
            <ark.svg className="h-5 w-5" asChild>
              {selected.icon}
            </ark.svg>
            <span className="sr-only">{selected.label}</span>
          </Select.ValueText>
        </Select.Trigger>
      </Select.Control>

      <Select.Positioner className="z-dropdown">
        <Select.Content className="rounded border bg-white p-2 data-open:animate-fade-in data-closed:animate-fade-out dark:bg-gray-true-900">
          {themes.map(({icon, label, value}) => (
            <Select.Item
              key={value}
              item={{
                icon,
                label,
                value,
              }}
              className="flex w-32 cursor-default items-center gap-4 rounded px-2 py-1 data-highlighted:bg-gray-true-50 dark:data-highlighted:bg-gray-true-800/10"
            >
              <Select.ItemText className="flex grow items-center gap-2">
                <ark.svg asChild className="h-4 w-4">
                  {icon}
                </ark.svg>
                <span>{label}</span>
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

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
