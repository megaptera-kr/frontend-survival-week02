import React, { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
}

const e = React.createElement;

function Image({ src, alt = '', width }: ImageProps) {
  return (
    e('img', { src, alt, width: width ?? 'auto' })
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    e(
      'div',
      null,
      e(Greeting, { name: 'wholeman' }),
      e(Image, { src: '/images/test.jpg', alt: 'Test Image', width: 200 }),
      e('p', null, `Count: ${count}`),
      [1, 2, 3, 4, 5].map((i) => e(
        'button',
        { key: i, type: 'button', onClick: () => handleClick(i) },
        `+${i}`,
      )),
    )
  );
}
