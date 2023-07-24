import React, { useState, createElement } from 'react';
import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
}

function Image({ src, alt = '', width }: ImageProps) {
  return (
    React.createElement('img', {
      src,
      alt,
      width: width ?? 'auto',
    })
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  const ce = React.createElement;

  return createElement(
    'div',
    {},
    ce(Greeting, { name: 'wholeman' }),
    ce(Image, { src: '/images/test.jpg', alt: 'Test Image', width: 200 }),
    ce('p', {}, 'Count: ', count),
    [1, 2, 3, 4, 5].map((i) => React.createElement('button', {
      key: i,
      type: 'button',
      onClick: () => handleClick(i),
    }, '+', i)),
  );
}
