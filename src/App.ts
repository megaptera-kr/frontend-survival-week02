import { useState, createElement } from 'react';
import Greeting from './components/Greeting';

// type ImageProps = {
//   src: string;
//   alt?: string;
//   width?: number;
// }

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  const makeList = () => [1, 2, 3, 4, 5].map((i) => (
    createElement(
      'button',
      { key: i, type: 'button', onClick: () => handleClick(i) },
      `+${i}`,
    )
  ));

  return createElement('div', {}, [
    createElement(Greeting, { name: 'wholeman' }),
    createElement('img', { src: '/images/test.jpg', alt: 'Test Image', width: 200 }),
    createElement('p', {}, `Count: ${count}`),
    makeList(),
  ]);
}
