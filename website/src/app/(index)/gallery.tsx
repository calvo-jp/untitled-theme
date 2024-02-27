'use client';

import {useDisclosure} from '@/lib/use-disclosure';
import {Dialog, Tooltip} from '@ark-ui/react';
import {XCloseIcon} from '@untitled-theme/icons-react';
import {useContext} from './context';

export function Gallery() {
  const context = useContext();
  const disclosure = useDisclosure();

  return (
    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
      {context.items.map((item) => {
        return (
          <Tooltip.Root key={item.name} lazyMount unmountOnExit openDelay={0}>
            <Tooltip.Trigger
              type="button"
              onClick={disclosure.onToggle}
              dangerouslySetInnerHTML={{
                __html: item.html,
              }}
              className="aspect-square border border-gray-true-200 flex items-center justify-center p-2 rounded dark:border-gray-true-800 hover:bg-gray-true-800/10 transition duration-200"
              aria-label={item.name}
            />

            <Tooltip.Positioner>
              <Tooltip.Content className="bg-gray-true-100 text-gray-true-800 fontMono text-sm font-mono px-4 py-3 rounded-lg transition-opacity duration-300">
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
          <Dialog.Content className="absolute h-2/3 bg-gray-true-900 w-full bottom-0 right-0">
            <Dialog.CloseTrigger>
              <XCloseIcon />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </div>
  );
}
