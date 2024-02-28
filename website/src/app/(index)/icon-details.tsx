'use client';

import {Dialog, Tabs} from '@ark-ui/react';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {usePageContext} from './page-context';

export function IconDetails() {
  const context = usePageContext();

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
      <Dialog.Backdrop className="fixed inset-0 z-overlay bg-gray-true-950/50 backdrop-blur-sm" />
      <Dialog.Positioner>
        <Dialog.Content className="absolute bottom-0 right-0 z-modal h-[80vh] w-full bg-gray-true-950 p-12">
          <div>
            <div
              className="w-fit rounded border p-3"
              dangerouslySetInnerHTML={{
                __html: context.inspectionSubject?.content ?? '',
              }}
            />
            <p className="mt-3 font-mono"></p>

            <Tabs.Root className="mt-8">
              <Tabs.List className="flex gap-4">
                {items.map((item) => (
                  <Tabs.Trigger key={item.value} value={item.value}>
                    {item.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              {items.map((item) => (
                <Tabs.Content
                  key={item.value}
                  value={item.value}
                  className="mt-5 max-w-lg rounded bg-gray-true-800/25 p-5 text-sm"
                >
                  <code>
                    <pre>{item.content}</pre>
                  </code>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>

          <Dialog.CloseTrigger className="absolute right-4 top-4">
            <XCloseIcon />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

const items = [
  {
    label: 'SVG',
    value: 'svg',
    content: `<svg
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
  },
  {
    label: 'Svelte',
    value: 'svelte',
  },
];
