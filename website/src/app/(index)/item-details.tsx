'use client';

import {Dialog, Tabs} from '@ark-ui/react';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {usePageContext} from './page-context';

export function ItemDetails() {
  const context = usePageContext();

  return (
    <Dialog.Root onOpenChange={() => {}} lazyMount unmountOnExit>
      <Dialog.Backdrop className="fixed inset-0 z-overlay bg-gray-true-950/50 backdrop-blur-sm" />
      <Dialog.Positioner>
        <Dialog.Content className="absolute bottom-0 right-0 z-modal h-[80vh] w-full bg-gray-true-950 p-12">
          <div>
            <div
              className="w-fit rounded border p-3"
              dangerouslySetInnerHTML={{
                __html: '',
              }}
            />
            <p className="mt-3 font-mono"></p>

            <Tabs.Root>
              <Tabs.List>
                <Tabs.Trigger value="SVG">Usage</Tabs.Trigger>
                <Tabs.Trigger value="React">Details</Tabs.Trigger>
                <Tabs.Trigger value="Svelte">Code</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="SVG"></Tabs.Content>
              <Tabs.Content value="React"></Tabs.Content>
              <Tabs.Content value="Svelte"></Tabs.Content>
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
