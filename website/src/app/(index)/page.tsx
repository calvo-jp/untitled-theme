import {Gallery} from './gallery';
import {IconDetails} from './icon-details';
import {PageProvider} from './page-context';
import {Searchbar} from './searchbar';
import {Total} from './total';
import {getIcons} from './utils.server';

export default async function Landing() {
  return (
    <PageProvider items={await getIcons()}>
      <Searchbar />
      <div className="mt-8 space-y-3">
        <Total />
        <Gallery />
      </div>

      <IconDetails />
    </PageProvider>
  );
}
