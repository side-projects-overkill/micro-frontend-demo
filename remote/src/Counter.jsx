import { createSignal } from 'solid-js';

export default () => {
  const [count, setCount] = createSignal(0);

  return (
    <div class="bg-blue-900 text-white">
      <div>Count = {count()}</div>
      <button
        class="bg-red-800"
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        Increment counter
      </button>
    </div>
  );
};
