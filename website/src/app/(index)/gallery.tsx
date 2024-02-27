'use client';

import {Dialog, ark} from '@ark-ui/react';
import {useContext} from './context';

export function Gallery() {
  const context = useContext();

  return (
    <ark.div className="grid grid-cols-12 gap-2">
      {context.items.map((item) => {
        return (
          <ark.button
            key={item.name}
            type="button"
            dangerouslySetInnerHTML={{
              __html: item.html,
            }}
            className="aspect-square border text-gray-true-700 border-gray-true-200 flex items-center justify-center p-2 rounded"
            aria-label={item.name}
          />
        );
      })}

      <Dialog.Root lazyMount unmountOnExit>
        <Dialog.Positioner>
          <Dialog.Content>Wiw</Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </ark.div>
  );
}
