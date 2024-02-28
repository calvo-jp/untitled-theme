'use client';

import {GalleryItem} from './gallery-item';
import {usePageContext} from './page-context';

export function Gallery() {
  const context = usePageContext();

  return (
    <div className="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
      {context.items.map((item) => (
        <GalleryItem key={item.name} data={item} />
      ))}
    </div>
  );
}
