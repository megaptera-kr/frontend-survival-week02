import React from 'react';

function Greeting({ name }: {name: string}) {
  return React.createElement('p', null, 'Hello', ' ', name, '!');
}

export default Greeting;
