import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Count from './components/Count';
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
      width: width || 'auto',
    })
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
      React.createElement(Image, { src: '/images/test.jpg', alt: 'Test Image', width: 200 }),
      React.createElement(Greeting, { name: 'wholeman' }),
      React.createElement(Count, { count }),
      React.createElement(Buttons, { handleClick }),
    )
  );
}
