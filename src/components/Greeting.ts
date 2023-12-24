import React from 'react';

export default function Greeting({ name }: {
  name: string;
}) {
  // return (
  //   <p>
  //     Hello,
  //     {' '}
  //     {name}
  //     !
  //   </p>
  // );
  return React.createElement('p', null, 'Hello, ', name, '!');
}
