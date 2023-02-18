import React from 'react';

type ButtonsProps = {
  handleClick:(value: number) => void;
}

export default function Buttons({ handleClick }: ButtonsProps) {
  return (
    React.createElement('div', null, [1, 2, 3, 4, 5].map((i) => (
      React.createElement('button', { key: i, type: 'button', onClick: () => handleClick(i) }, '+', i))))
  );
}
