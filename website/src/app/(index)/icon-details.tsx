'use client';

import {Syntax} from '@/app/(index)/syntax';
import {Clipboard, Dialog, Tabs} from '@ark-ui/react';
import {CheckIcon, Copy01Icon, XCloseIcon} from '@untitled-theme/icons-react';
import {useEffect, useState} from 'react';
import {usePageContext} from './page-context';
import {toHtmlComponent, toReactComponent, toSvelteComponent} from './utils';

export function IconDetails() {
  const context = usePageContext();
  const items = useItems();

  return (
    <Dialog.Root
      open={!!context.inspectionSubject}
      onOpenChange={({open}) => {
        if (!open) {
          context.inspect.dismiss();
        }
      }}
      lazyMount
    >
      <Dialog.Backdrop className="fixed inset-0 z-overlay bg-white/25 backdrop-blur-sm data-open:animate-fade-in data-closed:animate-fade-out dark:bg-gray-true-950/50" />
      <Dialog.Positioner>
        <Dialog.Content className="fixed bottom-0 right-0 z-modal w-full border-t bg-white p-8 data-open:animate-slide-up data-closed:animate-slide-down dark:bg-gray-true-950">
          <div>
            <div
              className="w-fit rounded border p-3"
              dangerouslySetInnerHTML={{
                __html: context.inspectionSubject?.content ?? '',
              }}
            />

            <div className="mt-5 flex max-h-screen w-fit items-center gap-5 overflow-y-auto rounded-sm bg-gray-true-100 px-3 py-2 dark:bg-gray-true-800/25">
              <code>&lt;{context.inspectionSubject?.displayName ?? ''}&nbsp;&#47;&gt;</code>

              <Clipboard.Root className="flex">
                <Clipboard.Label className="sr-only">Copy</Clipboard.Label>
                <Clipboard.Trigger>
                  <Clipboard.Indicator
                    copied={
                      <CheckIcon className="h-4 w-4 text-success-500 dark:text-success-700" />
                    }
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
                        className="absolute right-px top-px rounded-bl-full bg-white/50 p-3 backdrop-blur-sm"
                      >
                        <Clipboard.Label className="sr-only">Copy</Clipboard.Label>
                        <Clipboard.Trigger>
                          <Clipboard.Indicator
                            copied={
                              <CheckIcon className="h-5 w-5 text-success-500 dark:text-success-700" />
                            }
                          >
                            <Copy01Icon className="h-5 w-5" />
                          </Clipboard.Indicator>
                        </Clipboard.Trigger>
                      </Clipboard.Root>

                      <Syntax language={item.value} className="[&_.shiki]:max-h-[50vh]">
                        {item.content}
                      </Syntax>
                    </div>
                  </Tabs.Content>
                );
              })}
            </Tabs.Root>
          </div>

          <Dialog.CloseTrigger className="absolute right-4 top-4 rounded-full bg-gray-true-100 p-2 dark:bg-gray-true-800/25">
            <XCloseIcon />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

function useItems() {
  const context = usePageContext();
  const [htmlComponent, setHtmlComponent] = useState('');
  const [reactComponent, setReactComponent] = useState('');
  const [svelteComponent, setSvelteComponent] = useState('');

  useEffect(() => {
    if (context.inspectionSubject) {
      toHtmlComponent(context.inspectionSubject).then(setHtmlComponent);
      toReactComponent(context.inspectionSubject).then(setReactComponent);
      toSvelteComponent(context.inspectionSubject).then(setSvelteComponent);
    }
  }, [context.inspectionSubject]);

  return [
    {
      label: 'SVG',
      value: 'html' as const,
      content: htmlComponent,
    },
    {
      label: 'React',
      value: 'tsx' as const,
      content: reactComponent,
    },
    {
      label: 'Svelte',
      value: 'svelte' as const,
      content: svelteComponent,
    },
  ];
}
