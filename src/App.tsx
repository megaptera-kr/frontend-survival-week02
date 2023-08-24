import { createElement } from 'react';

import { useState } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
}

function Image({ src, alt = '', width }: ImageProps) {
  return createElement('img', {src:src, alt:alt, width:(width ?? 'auto')});
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return createElement('div', null,
    createElement(Greeting, {name:'wholeman'}),
    createElement(Image, {src:'/images/test.jpg', alt:'Test Image', width:200}),
    createElement('p', null, 'Count: ', count),
    [1, 2, 3, 4, 5].map((num) => createElement('button', {key:num, type:'button', onClick:() => handleClick(num)}, '+', num)));
}
