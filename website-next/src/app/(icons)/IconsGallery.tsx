'use client';

import {Icon} from '@/types';
import {CSSProperties} from 'react';
import {IconDetails} from './IconDetails';
import {IconsGalleryProvider} from './IconsGalleryContext';
import {useIconsGallery} from './useIconsGallery';

export interface IconsGalleryProps {
  icons: Icon[];
  id?: string;
  style?: CSSProperties;
  className?: string;
}

export function IconsGallery(props: IconsGalleryProps) {
  const iconsGallery = useIconsGallery(props);

  return (
    <IconsGalleryProvider value={iconsGallery}>
      <div id={props.id} style={props.style} className={props.className}>
        <p className="mb-3 text-sm">{iconsGallery.icons.length} icons found</p>
        <div className="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
          {iconsGallery.icons.map((icon) => {
            return (
              <button
                key={icon.name}
                type="button"
                onClick={() => iconsGallery.setIcon(icon)}
                className="icon:size-8 icon:stroke-[1.66667] flex aspect-square cursor-pointer items-center justify-center rounded border border-neutral-300 p-2 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800/10"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: icon.html,
                  }}
                />
                <span className="sr-only">{icon.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <IconDetails />
    </IconsGalleryProvider>
  );
}
