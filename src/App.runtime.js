import { useState } from 'react';
import { jsxs as _jsxs, jsx as _jsx } from 'react/jsx-runtime';

function Greeting({
  name,
}) {
  return _jsxs('p', {
    children: ['Hello,', ' ', name, '!'],
  });
}

function Image({
  src,
  alt = '',
  width,
}) {
  return _jsx('img', {
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
  return (
    _jsxs('div', {
      children: [
        _jsx(Greeting, {
          name: 'wholeman',
        }),
        _jsx(Image, {
          src: '/images/test.jpg',
          alt: 'Test Image',
          width: 200,
        }),
        _jsxs('p', {
          children: ['Count:', ' ', count],
        }),
        [1, 2, 3, 4, 5].map((i) => _jsxs('button', {
          type: 'button',
          onClick: () => handleClick(i),
          children: ['+', i],
        }, i)),
      ],
    })
  );
}
