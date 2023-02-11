import React, { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
}

function Image({ src, alt = '', width }: ImageProps) {
  return React.createElement('img', {
    src,
    alt,
    width: width ?? 'auto',
  });
}

const App = () => {
  const el = React.createElement;

  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    el(
      'div',
      null,
      (el(Greeting, { name: 'wholeman' })),
      (el(Image, { src: '/images/test.jpg', alt: 'Test Image', width: 200 })),
      (el('p', null, 'Count', count)),
      [1, 2, 3, 4, 5].map((idx) => el('button', { key: idx, type: 'button', onClick: () => handleClick(idx) }, '+', idx)),
    )
  );
};

export default App;
