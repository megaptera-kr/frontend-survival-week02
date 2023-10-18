import React from 'react';

export default function Greeting(name: string) {
  return (
    React.createElement('p', null, `Hello, ${name}!`)
  );
}
