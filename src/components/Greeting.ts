import React from 'react';

export default function Greeting({ name }: {
  name: string;
}) {
  const e = React.createElement;

  return (
    e('p', null, `Hello, ${name}!`)
  );
}
