import { createResource, Show } from 'solid-js';

const getLocation = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default ({ url }) => {
  const [location] = createResource(() => getLocation(url));

  return (
    <Show when={location()} fallback={<div> . . . Loading</div>}>
      <div>Location / Origin: {location().name}</div>
      <div>Dimension: {location().dimension}</div>
    </Show>
  );
};
