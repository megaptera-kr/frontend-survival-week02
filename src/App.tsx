import React from 'react';

const e = React.createElement;

type GreetingProps = {
  name: string;
}

function Greeting({
  name,
}: GreetingProps) {
  return e('p', null, 'Hello,', ' ', name, '!');
}

type ImageProps = {
  src: string,
  alt?:string,
  width?: number,
}

function Image({
  src,
  alt = '',
  width,
}: ImageProps) {
  return e('img', {
    src,
    alt,
    width: width ?? 'auto',
  });
}

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    e(
      'div',
      null,
      // 내가 선언한 컴포넌트가 요소 이름으로 들어간다.
      e(Greeting, {
        name: 'wholeman',
      }),
      e(Image, {
        src: '/images/test.jpg',
        alt: 'Test Image',
        width: 200,
      }),
      /**
       * children 이 왜 쪼개져서 들어가는걸까. `Count: ${count}` 는?
       * -> 리액트 여러 덩어리로 나누어 처리하는 이유는 의도된 동작이고,
       * -> 중간중간 유연하게 JSX가 삽입될 수 있는 상항을 대응하기 위해서라고 함.
       */
      React.createElement('p', null, 'Count:', ' ', count),
      React.createElement('p', null, `Count: ${count}`),
      /**
       * key 가 props 에 포함된다.
       * jsx-runtime(jsx 함수) 로 트랜스파일된 파일은 key 가 별도의 속성 자리를 차지하고 있다.
       *
       *  [1, 2, 3, 4, 5].map((i) => _jsxs('button', {
       *    type: 'button',
       *    onClick: () => handleClick(i),
       *    children: ['+', i],
       *  }, i)), <-- (*)
       */
      [1, 2, 3, 4, 5].map((i) => e('button', {
        key: i,
        type: 'button',
        onClick: () => handleClick(i),
      }, '+', i)),
    )
  );
}
