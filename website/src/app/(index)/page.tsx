import {ark} from '@ark-ui/react';
import {Provider} from './context';
import {Gallery} from './gallery';
import {getItems} from './get-items';
import {Searchbar} from './searchbar';

export default async function Landing() {
  return (
    <Provider items={await getItems()}>
      <Searchbar />
      <ark.div className="mt-8">
        <Gallery />
      </ark.div>
    </Provider>
  );
}
