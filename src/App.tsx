import React, { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
	src: string;
	alt?: string;
	width?: number;
}

function Image({ src, alt = '', width }: ImageProps) {
  return (
    React.createElement('img', { src, alt, width })
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    React.createElement(
      'div',
      null,
      Greeting('wholeman'),
      Image({ src: '/images/test.jpg', alt: 'Test Image', width: 200 }),
      React.createElement('p', null, 'Count: ', count),
      [1, 2, 3, 4, 5].map((i) => (
        React.createElement('button', { type: 'button', onClick: () => handleClick(i) }, `+${i}`)
      )),
    )
  );
}
