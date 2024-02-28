'use client';

import {Portal, Select, ark} from '@ark-ui/react';
import {CheckIcon, CloudMoonIcon, CloudSun02Icon, Monitor01Icon} from '@untitled-theme/icons-react';

export function Theme() {
  return (
    <Select.Root items={themes} defaultValue={[themes[0].value]} lazyMount unmountOnExit>
      {(api) => (
        <>
          <Select.Control>
            <Select.Trigger className="flex aspect-square items-center gap-2 rounded border px-2 py-1">
              <Select.ValueText className="flex grow items-center gap-1 text-left">
                <ark.svg className="h-5 w-5" asChild>
                  {api.selectedItems[0].icon}
                </ark.svg>
                <span className="sr-only">{api.selectedItems[0].label}</span>
              </Select.ValueText>
            </Select.Trigger>
          </Select.Control>

          <Portal>
            <Select.Positioner className="z-dropdown">
              <Select.Content className="rounded border bg-gray-true-900 p-2">
                {themes.map((theme) => (
                  <Select.Item
                    key={theme.value}
                    item={theme}
                    className="data-highlighted:bg-gray-true-800/10 flex w-36 cursor-default items-center gap-4 rounded px-2 py-1"
                  >
                    <Select.ItemText className="flex grow items-center gap-2">
                      <ark.svg asChild className="h-4 w-4">
                        {theme.icon}
                      </ark.svg>
                      <ark.span>{theme.label}</ark.span>
                    </Select.ItemText>
                    <Select.ItemIndicator>
                      <CheckIcon className="h-4 w-4 text-success-300" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </>
      )}
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
