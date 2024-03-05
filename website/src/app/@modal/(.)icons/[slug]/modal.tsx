'use client';

import {Dialog} from '@ark-ui/react';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {useRouter} from 'next/navigation';
import {PropsWithChildren} from 'react';

export function Modal({children}: PropsWithChildren) {
  const router = useRouter();

  return (
    <Dialog.Root
      open
      onOpenChange={({open}) => {
        if (!open) router.back();
      }}
    >
      <Dialog.Backdrop className="fixed inset-0 z-overlay bg-white/25 backdrop-blur-sm data-open:animate-fade-in data-closed:animate-fade-out dark:bg-gray-true-950/50" />
      <Dialog.Positioner>
        <Dialog.Content className="fixed bottom-0 right-0 z-modal w-full border-t bg-white p-4 data-open:animate-slide-up data-closed:animate-slide-down md:p-6 lg:p-8 dark:bg-gray-true-950">
          <div className="max-w-lg [&_.shiki]:max-h-[48vh]">{children}</div>

          <Dialog.CloseTrigger className="absolute right-3 top-3 p-1">
            <XCloseIcon />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
