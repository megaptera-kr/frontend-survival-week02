import { useState, createElement } from 'react';
import Greeting from './components/Greeting';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  const c = createElement;

  const makeList = () => [1, 2, 3, 4, 5].map((i) => (
    c(
      'button',
      { key: i, type: 'button', onClick: () => handleClick(i) },
      `+${i}`,
    )
  ));

  return c('div', {}, [
    c(Greeting, { name: 'wholeman' }),
    c('img', { src: '/images/test.jpg', alt: 'Test Image', width: 200 }),
    c('p', {}, `Count: ${count}`),
    makeList(),
  ]);
}
