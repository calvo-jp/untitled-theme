import {Provider} from './context';
import {Gallery} from './gallery';
import {Searchbar} from './searchbar';
import {Total} from './total';
import {getItems} from './utils.server';

export default async function Landing() {
  return (
    <Provider items={await getItems()}>
      <Searchbar />
      <div className="mt-8 space-y-3">
        <Total />
        <Gallery />
      </div>
    </Provider>
  );
}
