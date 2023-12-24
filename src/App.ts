import React, { useState } from 'react';

import Greeting from './components/Greeting';

type IamgeProps = {
  src: string;
  alt?: string;
  width?: number;
}

function Image({ src, alt = '', width }: IamgeProps) {
  return React.createElement('img', { src, alt, width: width ?? 'auto' });
}

export default function App2() {
  const [count, setCount] = useState(0);
  // let count = 0;

  const handleClick = (value: number) => {
    setCount(count + value);
    // count += 1;
  };

  const buttons = [1, 2, 3, 4, 5].map((i) => (
    React.createElement(
      'button',
      {
        key: i,
        type: 'button',
        onClick: () => handleClick(i),
      },
      '+',
      i,
    )
  ));

  return React.createElement('div', null, ...[
    Greeting('wholeman'),
    Image({
      src: '/images/test.jpg',
      alt: 'Test Image',
      width: 200,
    }),
    React.createElement('p', null, 'Count:', ' ', count),
    buttons,
  ]);
}
