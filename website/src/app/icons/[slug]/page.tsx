import {IconDetails} from '@/app/icon-details';
import {getIcon} from '@/app/utils';
import {notFound} from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function IconDetailsPage({params}: Props) {
  const icon = await getIcon(params.slug);

  return !icon ? notFound() : <IconDetails data={icon} />;
}
