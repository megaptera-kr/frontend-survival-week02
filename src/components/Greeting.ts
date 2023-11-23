import React from 'react';

export default function Greeting({ name }: { name: string }) {
  const Greeting = React.createElement(
    'p',
    { name: name },
    'Hello,',
    ' ',
    name,
    '!'
  );

  return Greeting;
}
