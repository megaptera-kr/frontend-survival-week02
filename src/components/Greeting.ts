import React from 'react';

const t = React.createElement;

export default function Greeting({ name }: { name: string }) {
  return t('p', null, 'Hello,', ' ', name, '!');
}
