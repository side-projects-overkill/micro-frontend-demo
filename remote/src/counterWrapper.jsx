import { render } from 'solid-js/web';

import './index.scss';
import Counter from './Counter';

export default (el) => {
  render(Counter, el);
};
