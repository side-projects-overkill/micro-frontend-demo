import { render } from 'solid-js/web';

import './index.scss';
import LocationDetails from './LocationDetails';

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <LocationDetails url="https://rickandmortyapi.com/api/location/4" />
  </div>
);
render(App, document.getElementById('app'));
