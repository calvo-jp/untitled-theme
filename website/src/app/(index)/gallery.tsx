'use client';

import {Tooltip} from '@ark-ui/react';
import {usePageContext} from './page-context';
import type {Icon} from './types';

export function Gallery() {
  const context = usePageContext();

  return (
    <div className="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
      {context.icons.map((item) => (
        <GalleryItem key={item.displayName} data={item} />
      ))}
    </div>
  );
}

function GalleryItem({data}: {data: Icon}) {
  const context = usePageContext();

  return (
    <Tooltip.Root lazyMount unmountOnExit>
      <Tooltip.Trigger
        type="button"
        onClick={() => context.inspect(data)}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
        className="flex aspect-square items-center justify-center rounded border border-gray-true-200 p-2 transition duration-200 hover:bg-gray-true-50 dark:border-gray-true-800 dark:hover:bg-gray-true-800/10"
        aria-label={data.displayName}
      />

      <Tooltip.Positioner>
        <Tooltip.Content className="rounded-md bg-gray-true-50 px-2.5 py-2 font-mono text-xs text-gray-true-800 transition-opacity duration-300">
          <Tooltip.Arrow className="[--arrow-background:theme(colors.gray-true[100])] [--arrow-size:theme(spacing.2)]">
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>

          {data.displayName}
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
}
