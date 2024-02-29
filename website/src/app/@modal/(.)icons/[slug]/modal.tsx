'use client';

import {Dialog, Tooltip} from '@ark-ui/react';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {useRouter} from 'next/navigation';
import {PropsWithChildren} from 'react';
import {twMerge} from 'tailwind-merge';

export function Modal({children}: PropsWithChildren) {
  const router = useRouter();

  return (
    <Dialog.Root
      open
      lazyMount
      unmountOnExit
      onOpenChange={({open}) => {
        if (!open) router.back();
      }}
    >
      <Dialog.Backdrop className="fixed inset-0 z-overlay bg-white/25 backdrop-blur-sm data-open:animate-fade-in data-closed:animate-fade-out dark:bg-gray-true-950/50" />
      <Dialog.Positioner>
        <Dialog.Content className="fixed bottom-0 right-0 z-modal w-full border-t bg-white p-4 data-open:animate-slide-up data-closed:animate-slide-down md:p-6 lg:p-8 dark:bg-gray-true-950">
          <div className="max-w-lg [&_.shiki]:max-h-[48vh]">{children}</div>

          <Tooltip.Root lazyMount unmountOnExit>
            <Tooltip.Trigger asChild>
              <Dialog.CloseTrigger className="absolute right-3 top-3 p-1">
                <XCloseIcon />
              </Dialog.CloseTrigger>
            </Tooltip.Trigger>

            <Tooltip.Positioner>
              <Tooltip.Content className="rounded-md bg-gray-true-900 px-2.5 py-2 font-mono text-sm text-white data-open:animate-scalefade-in data-closed:animate-scalefade-out dark:bg-gray-true-50 dark:text-gray-true-800">
                <Tooltip.Arrow
                  className={twMerge(
                    '[--arrow-size:theme(spacing.2)]',
                    '[--arrow-background:theme(colors.gray-true[900])]',
                    'dark:[--arrow-background:theme(colors.gray-true[100])]',
                  )}
                >
                  <Tooltip.ArrowTip />
                </Tooltip.Arrow>
                Close
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
