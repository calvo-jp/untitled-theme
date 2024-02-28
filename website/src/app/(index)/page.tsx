import {Gallery} from './gallery';
import {ItemDetails} from './item-details';
import {PageProvider} from './page-context';
import {Searchbar} from './searchbar';
import {Total} from './total';
import {getItems} from './utils.server';

export default async function Landing() {
  return (
    <PageProvider items={await getItems()}>
      <Searchbar />
      <div className="mt-8 space-y-3">
        <Total />
        <Gallery />
      </div>

      <ItemDetails />
    </PageProvider>
  );
}
