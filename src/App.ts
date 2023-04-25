import { useState, createElement } from 'react';

import Greeting from './components/Greeting';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
}

function Image({ src, alt = '', width }: ImageProps) {
  return createElement('img', { src, alt, width: width ?? 'auto' });
  // return (
  //   <img src={src} alt={alt} width={width ?? 'auto'} />
  // );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };
  return createElement(
    'div',
    null,
    createElement(Greeting, { name: 'wholeman' }),
    createElement(Image, { src: '/images/test.jpg', alt: 'Test Image', width: 200 }),
    createElement('p', null, 'Count: ', count),
    [1, 2, 3, 4, 5].map((i) => createElement('button', { key: i, type: 'button', onClick: () => handleClick(i) }, '+', i)),
  );
  // return (
  //   <div>
  //     <Greeting name="wholeman" />
  //     <Image src="/images/test.jpg" alt="Test Image" width={200} />
  //     <p>
  //       Count:
  //       {' '}
  //       {count}
  //     </p>
  //     {[1, 2, 3, 4, 5].map((i) => (
  //       <button key={i} type="button" onClick={() => handleClick(i)}>
  //         +
  //         {i}
  //       </button>
  //     ))}
  //   </div>
  // );
}
