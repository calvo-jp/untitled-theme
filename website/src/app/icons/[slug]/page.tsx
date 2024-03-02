import {IconDetails} from '@/app/icon-details';
import {getIcon, getIcons} from '@/app/utils';
import {type Metadata} from 'next';
import {notFound} from 'next/navigation';

export async function generateStaticParams() {
  const icons = await getIcons();
  return icons.map(({slug}) => ({slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const icon = await getIcon(params.slug);

  return {
    title: icon?.name.pascal,
  };
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
