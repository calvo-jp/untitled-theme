import {Clipboard, Tabs} from '@ark-ui/react';
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-react';
import type {Icon} from './types';

interface Props {
  data: Icon<true>;
}

export async function IconDetails({data}: Props) {
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
  ];

  return (
    <div>
      <div
        className="w-fit rounded border p-3"
        dangerouslySetInnerHTML={{
          __html: data.html,
        }}
      />

      <div className="mt-5 flex max-h-screen w-fit items-center gap-5 overflow-y-auto rounded-sm bg-gray-true-100 px-3 py-2 dark:bg-gray-true-800/25">
        <code>&lt;{data.name.pascal}&nbsp;&#47;&gt;</code>

        <Clipboard.Root className="flex">
          <Clipboard.Label className="sr-only">Copy</Clipboard.Label>
          <Clipboard.Trigger className="p-1">
            <Clipboard.Indicator
              copied={<CheckIcon className="h-4 w-4 text-success-500 dark:text-success-700" />}
            >
              <Copy01Icon className="h-4 w-4" />
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
              className="transition-colors duration-300 data-selected:text-brand-700 dark:data-selected:text-brand-500"
            >
              {item.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {items.map((item) => {
          return (
            <Tabs.Content key={item.value} value={item.value} asChild>
              <div className="relative mt-5 rounded-sm text-sm">
                <Clipboard.Root
                  value={item.content}
                  className="absolute right-4 top-4 flex items-center justify-center rounded-lg bg-white/50 p-0.5 backdrop-blur-sm dark:bg-gray-true-950/50"
                >
                  <Clipboard.Label className="sr-only">Copy</Clipboard.Label>
                  <Clipboard.Trigger className="p-0.5">
                    <Clipboard.Indicator
                      copied={
                        <CheckIcon className="h-5 w-5 text-success-500 dark:text-success-700" />
                      }
                    >
                      <Copy01Icon className="h-5 w-5" />
                    </Clipboard.Indicator>
                  </Clipboard.Trigger>
                </Clipboard.Root>

                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                />
              </div>
            </Tabs.Content>
          );
        })}
      </Tabs.Root>
    </div>
  );
}
