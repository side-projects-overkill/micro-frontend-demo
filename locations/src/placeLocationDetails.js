import { render } from 'solid-js/web';
import LocationDetails from './LocationDetails';

export default function placeLocationDetails(el, url) {
  render(() => <LocationDetails url={url} />, el);
}
