import React, { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
}

function Image({ src, alt = '', width }: ImageProps) {
  return (
    // <img src={src} alt={alt} width={width ?? 'auto'} />
    React.createElement('img', { src, alt, width: width ?? 'auto' })
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(Greeting, { name: 'wholeman' }),
    React.createElement(Image, {
      src: '/images/test.jpg',
      alt: 'Test Image',
      width: 200,
    }),
    /*
    <p>
      Count:
      {' '}
      {count}
    </p>
    {[1, 2, 3, 4, 5].map((i) => (
      <button key={i} type="button" onClick={() => handleClick(i)}>
        +
        {i}
      </button>
    ))}
    */
    React.createElement('p', null, 'Count:', ' ', count)
    , [1, 2, 3, 4, 5].map((i) => React.createElement(
      'button',
      { key: i, type: 'button', onClick: () => handleClick(i) },
      // 여기부터 태그 안에 들어가는 값
      '+',
      i,
    )),
  );
}
