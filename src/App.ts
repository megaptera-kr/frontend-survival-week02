import React, { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
};

function Image({ src, alt = '', width }: ImageProps) {
  return React.createElement('img', { src, alt, width: width ?? 'auto' });
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  const element = React.createElement;

  return element(
    'div',
    null,
    element(Greeting, { name: 'wholeman' }),
    element(Image, {
      src: '/images/test.jpg',
      alt: 'Test Image',
      width: 200,
    }),
    element('p', null, 'Count: ', count),
    [1, 2, 3, 4, 5].map((i) =>
      element(
        'button',
        { key: i, type: 'button', onClick: () => handleClick(i) },
        `+${i}`
      )
    ),
    element('p', null, 'Hello, wholeman!')
  );
}

// <div>
// <Greeting name='wholeman' />
// <Image src='/images/test.jpg' alt='Test Image' width={200} />
// <p>Count: {count}</p>
// {[1, 2, 3, 4, 5].map((i) => (
//   <button key={i} type='button' onClick={() => handleClick(i)}>
//     +{i}
//   </button>
// ))}
// </div>
