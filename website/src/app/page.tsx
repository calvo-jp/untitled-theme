import {Tooltip} from '@ark-ui/react';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';
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
          <Tooltip.Root key={icon.slug} lazyMount unmountOnExit>
            <Tooltip.Trigger
              type="button"
              dangerouslySetInnerHTML={{
                __html: icon.html,
              }}
              className="flex aspect-square items-center justify-center rounded border p-2 transition duration-200 hover:bg-gray-true-50 focus:shadow-outline dark:hover:bg-gray-true-800/10"
              aria-label={icon.name}
              asChild
            >
              <Link href={`/icons/${icon.slug}`} />
            </Tooltip.Trigger>

            <Tooltip.Positioner>
              <Tooltip.Content className="rounded-md bg-gray-true-900 px-2.5 py-2 font-mono text-sm text-white data-open:animate-scalefade-in data-closed:animate-scalefade-out dark:bg-gray-true-50 dark:text-gray-true-800">
                <Tooltip.Arrow
                  className={twMerge(
                    '[--arrow-size:theme(spacing.2)]',
                    '[--arrow-background:theme(colors.gray-true[900])]',
                    'dark:[--arrow-background:theme(colors.gray-true[100])]',
                  )}
                >
                  <Tooltip.ArrowTip />
                </Tooltip.Arrow>

                {icon.name}
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
        ))}
      </div>
    </>
  );
}
