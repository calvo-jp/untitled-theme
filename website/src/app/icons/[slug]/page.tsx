import {IconDetails} from '@/app/icon-details';
import {getIcon, getIcons} from '@/app/utils';
import {notFound} from 'next/navigation';

export async function generateStaticParams() {
  const icons = await getIcons({limit: 100});
  return icons.map(({slug}) => ({slug}));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function IconDetailsPage({params}: Props) {
  const icon = await getIcon(params.slug);

  return !icon ? notFound() : <IconDetails data={icon} />;
}
