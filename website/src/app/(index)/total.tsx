'use client';

import {useContext} from './context';

export function Total() {
  const {count, search} = useContext();

  if (search) {
    return (
      <div className="font-open-sans text-sm">
        {count <= 0
          ? `No icons matched for ${search}`
          : count === 1
            ? `Showing 1 match for ${search}`
            : `Showing ${count} matches for ${search}`}
      </div>
    );
  }

  return (
    <div className="font-open-sans text-sm">
      {count <= 0
        ? 'No records to show'
        : count === 1
          ? 'Showing 1 record'
          : `Showing all ${count} records`}
    </div>
  );
}
