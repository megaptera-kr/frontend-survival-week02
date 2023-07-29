import React, { useState } from 'react';

function Greeting({
  name,
}) {
  return React.createElement('p', null, 'Hello,', ' ', name, '!');
}

function Image({
  src,
  alt = '',
  width,
}) {
  return React.createElement('img', {
    src,
    alt,
    width: width ?? 'auto',
  });
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(count + value);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(Greeting, {
      name: 'wholeman',
    }),
    React.createElement(Image, {
      src: '/images/test.jpg',
      alt: 'Test Image',
      width: 200,
    }),
    React.createElement('p', null, 'Count:', ' ', count),
    [1, 2, 3, 4, 5].map((i) => React.createElement('button', {
      key: i,
      type: 'button',
      onClick: () => handleClick(i),
    }, '+', i)),
  );
}
