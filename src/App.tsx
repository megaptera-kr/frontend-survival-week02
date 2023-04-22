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
    ce(Image, {
      src: '/images/test.jpg',
      alt: 'Test Image',
      width: 200,
    }),
    ce('p', {}, 'Count: ', count),
    ce('button', {
      key: 1,
      type: 'button',
      onClick: () => handleClick(1),
    }, '+', 1, ' '),
    ce('button', {
      key: 2,
      type: 'button',
      onClick: () => handleClick(2),
    }, '+', 2),
    ce('button', {
      key: 3,
      type: 'button',
      onClick: () => handleClick(3),
    }, '+', 3),
    ce('button', {
      key: 4,
      type: 'button',
      onClick: () => handleClick(4),
    }, '+', 4),
    ce('button', {
      key: 5,
      type: 'button',
      onClick: () => handleClick(5),
    }, '+', 5),
  );
}
