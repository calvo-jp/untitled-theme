'use client';

import {Clipboard, Dialog, Tabs} from '@ark-ui/react';
import {CheckIcon, Copy01Icon, XCloseIcon} from '@untitled-theme/icons-react';
import {forwardRef, type ComponentProps} from 'react';
import {twMerge} from 'tailwind-merge';
import {usePageContext} from './page-context';

export function IconDetails() {
  const context = usePageContext();

  if (!context.inspectionSubject) return null;

  return (
    <Dialog.Root
      open={!!context.inspectionSubject}
      onOpenChange={({open}) => {
        if (!open) {
          context.inspect.dismiss();
        }
      }}
      lazyMount
      unmountOnExit
    >
      <Dialog.Backdrop className="fixed inset-0 z-overlay bg-white/25 backdrop-blur-sm dark:bg-gray-true-950/50" />
      <Dialog.Positioner>
        <Dialog.Content className="fixed bottom-0 right-0 z-modal w-full border-t bg-white p-8 dark:bg-gray-true-950">
          <div>
            <div
              className="w-fit rounded border p-3"
              dangerouslySetInnerHTML={{
                __html: context.inspectionSubject?.content ?? '',
              }}
            />

            <div className="mt-5 flex w-fit items-center gap-5 rounded-sm bg-gray-true-100 px-3 py-2 dark:bg-gray-true-800/25">
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

              {items.map((item) => (
                <Tabs.Content key={item.value} value={item.value} asChild>
                  <Snippet>{item.getContent()}</Snippet>
                </Tabs.Content>
              ))}
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

const Snippet = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({className, children, ...props}, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          'relative mt-5 max-w-lg rounded-sm bg-gray-true-100 p-5 text-sm dark:bg-gray-true-800/25',
          className,
        )}
        {...props}
      >
        <Clipboard.Root className="absolute right-5 top-5" value={children?.toString()}>
          <Clipboard.Label className="sr-only">Copy</Clipboard.Label>
          <Clipboard.Trigger>
            <Clipboard.Indicator
              copied={<CheckIcon className="text-success-500 dark:text-success-700" />}
            >
              <Copy01Icon />
            </Clipboard.Indicator>
          </Clipboard.Trigger>
        </Clipboard.Root>

        <code>
          <pre>{children}</pre>
        </code>
      </div>
    );
  },
);

Snippet.displayName = 'Snippet';

const items = [
  {
    label: 'SVG',
    value: 'svg',
    getContent: () => `<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M22 12H18L15 21L9 3L6 12H2"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`,
  },
  {
    label: 'React',
    value: 'react',
    getContent: () => '',
  },
  {
    label: 'Svelte',
    value: 'svelte',
    getContent: () => '',
  },
];
