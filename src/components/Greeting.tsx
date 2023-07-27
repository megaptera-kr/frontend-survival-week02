import React from 'react';

export default function Greeting({ name }: { name: string }) {
  const ce = React.createElement;
  return ce('p', null, `Hello, ${name}!`);
}
