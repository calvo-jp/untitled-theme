import {Icon} from '@/types';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export interface UseIconsGalleryProps {
  icons: Icon[];
}

export interface UseIconsGalleryReturn {
  icons: Icon[];
  icon: Icon | null;
  setIcon: (icon: Icon | null) => void;
}

export function useIconsGallery(
  props: UseIconsGalleryProps,
): UseIconsGalleryReturn {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const icons = !searchParams.has('search')
    ? props.icons
    : props.icons.filter((icon) =>
        icon.name
          .toLowerCase()
          .includes(
            searchParams.get('search')?.replace(/\s+/g, '').toLowerCase() ?? '',
          ),
      );

  const icon = !searchParams.has('icon')
    ? null
    : (icons.find((icon) => icon.name === searchParams.get('icon')) ?? null);

  const setIcon = (icon: Icon | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (icon == null) {
      newSearchParams.delete('icon');
    } else {
      newSearchParams.set('icon', icon.name);
    }

    const queryString = newSearchParams.toString();
    const newPath = queryString ? `${pathname}?${queryString}` : pathname;

    router.push(newPath, {scroll: false});
  };

  return {
    icons,
    icon,
    setIcon,
  };
}
