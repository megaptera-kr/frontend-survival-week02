import React from 'react';

export default function Greeting({ name }: {
  name: string;
}) {
  return React.createElement('P', null, 'Hello,', name, '!');
}
