'use client';

import {useDisclosure} from '@/lib/use-disclosure';
import {Dialog, Tooltip} from '@ark-ui/react';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {useContext} from './context';

export function Gallery() {
  const context = useContext();
  const disclosure = useDisclosure();

  return (
    <div className="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
      {context.items.map((item) => {
        return (
          <Tooltip.Root key={item.name} lazyMount unmountOnExit openDelay={0}>
            <Tooltip.Trigger
              type="button"
              onClick={disclosure.onToggle}
              dangerouslySetInnerHTML={{
                __html: item.html,
              }}
              className="flex aspect-square items-center justify-center rounded border border-gray-true-200 p-2 transition duration-200 hover:bg-gray-true-800/10 dark:border-gray-true-800"
              aria-label={item.name}
            />

            <Tooltip.Positioner>
              <Tooltip.Content className="fontMono rounded-lg bg-gray-true-100 px-4 py-3 font-mono text-sm text-gray-true-800 transition-opacity duration-300">
                <Tooltip.Arrow className="[--arrow-background:theme(colors.gray-true[100])] [--arrow-size:theme(spacing.4)]">
                  <Tooltip.ArrowTip />
                </Tooltip.Arrow>

                {item.name}
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
        );
      })}

      <Dialog.Root
        lazyMount
        unmountOnExit
        open={disclosure.open}
        onOpenChange={({open}) => {
          if (open) {
            disclosure.onOpen();
          } else {
            disclosure.onClose();
          }
        }}
      >
        <Dialog.Backdrop className="fixed inset-0 bg-gray-true-800/10 backdrop-blur-sm" />
        <Dialog.Positioner>
          <Dialog.Content className="absolute bottom-0 right-0 h-2/3 w-full bg-gray-true-900">
            <Dialog.CloseTrigger>
              <XCloseIcon />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </div>
  );
}
