import React, { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
};

function Image({ src, alt = '', width }: ImageProps) {
  const img = React.createElement('img', { src, alt, width: width ?? 'auto' });
  return img;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  const greeting = React.createElement(Greeting, { name: 'wholeman' });
  const img = React.createElement(Image, {
    src: '/images/test.jpg',
    alt: 'Test Image',
    width: 200,
  });
  const countEl = React.createElement('p', null, 'Count: ', count);
  const btns = [1, 2, 3, 4, 5].map((i) => React.createElement(
    'button',
    {
      key: i,
      type: 'button',
      onClick: () => handleClick(i),
    },
    `+${i}`,
  ));

  const divEl = React.createElement('div', null, greeting, img, countEl, btns);
  return divEl;
}
