/** BUILD: 0 */

import Link from 'next/link';
import {Searchbar} from './searchbar';
import {getIcons} from './utils';

interface Props {
  searchParams: {
    search?: string | string[];
  };
}

export default async function IconsPage({searchParams}: Props) {
  const icons = await getIcons({search: searchParams.search?.toString()});

  let totalHtml = '';

  if (icons.length === 0) {
    totalHtml += 'No icons found';
  } else if (icons.length === 1) {
    totalHtml += '1 icon found';
  } else {
    totalHtml += `${icons.length} icons found`;
  }

  if (searchParams.search) {
    totalHtml += ` for <strong>'${searchParams.search}'</strong>`;
  }

  return (
    <>
      <Searchbar />

      <div
        className="mb-3 mt-5 text-sm lg:mt-8"
        dangerouslySetInnerHTML={{
          __html: totalHtml,
        }}
      />

      <div className="grid grid-cols-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
        {icons.map((icon) => (
          <Link
            key={icon.slug}
            href={`/icons/${icon.slug}`}
            scroll={false}
            className="flex aspect-square items-center justify-center rounded border p-2 transition duration-200 hover:bg-gray-true-50 focus:shadow-outline dark:hover:bg-gray-true-800/10"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: icon.html,
              }}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
