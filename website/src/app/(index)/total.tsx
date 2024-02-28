'use client';

import {usePageContext} from './page-context';

export function Total() {
  const context = usePageContext();

  let s: string[] = [];

  if (context.itemsCount === 0) {
    s.push('No icons found');
  } else if (context.itemsCount === 1) {
    s.push('1 icon found');
  } else {
    s.push(`${context.itemsCount} icons found`);
  }

  if (context.searchKeyword) {
    s.push(`for <strong>'${context.searchKeyword}'</strong>`);
  }

  return (
    <div
      className="text-sm [&_strong]:font-semibold"
      dangerouslySetInnerHTML={{
        __html: s.join(' '),
      }}
    />
  );
}
