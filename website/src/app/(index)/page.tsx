import {Provider} from './context';
import {Gallery} from './gallery';
import {Searchbar} from './searchbar';
import {getItems} from './utils.server';

export default async function Landing() {
  return (
    <Provider items={await getItems()}>
      <Searchbar />
      <div className="mt-8">
        <Gallery />
      </div>
    </Provider>
  );
}
