import React from 'react';

export default function Count({ count }: {count: number}) {
  return (
    React.createElement('p', null, 'Count: ', count)
  );
}
