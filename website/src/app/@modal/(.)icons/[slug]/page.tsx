import {IconDetails} from '@/app/icon-details';
import {getIcon, getIcons} from '@/app/utils';
import {notFound} from 'next/navigation';

export async function generateStaticParams() {
  const icons = await getIcons();
  const params = icons.map(({slug}) => ({slug}));
  return params;
}

export default async function IconDetailsPage({params}: {params: {slug: string}}) {
  const icon = await getIcon(params.slug);

  return !icon ? notFound() : <IconDetails data={icon} />;
}
