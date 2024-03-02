import {IconDetails} from '@/app/icon-details';
import {getIcon} from '@/app/utils';
import {notFound} from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export default async function IconDetailsModal({params}: Props) {
  const icon = await getIcon(params.slug);

  if (!icon) return notFound();

  return <IconDetails data={icon} />;
}
