import React from 'react';
import ReactDOM from 'react-dom/client';

import App2 from './App';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(App2());
}

main();
