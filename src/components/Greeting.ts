import { createElement } from 'react';

export default function Greeting({ name }: {
  name: string;
}) {
  return (
    createElement('p', { name }, `Hello, ${' '}${name}!`)
  );
}
