'use client';

import {useContext} from './context';

export function Total() {
  const {count, search} = useContext();

  let s: string[] = [];

  if (count === 0) {
    s.push('No icons found');
  } else if (count === 1) {
    s.push('1 icon found');
  } else {
    s.push(`${count} icons found`);
  }

  if (search) {
    s.push(`for <strong>'${search}'</strong>`);
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
