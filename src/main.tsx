import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App';

const e = React.createElement;

function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const rootElement = ReactDOM.createRoot(element);

  rootElement.render(
    // children 이 없으면, props null 이 필요가 없구나
    e(App),
  );
}

main();
