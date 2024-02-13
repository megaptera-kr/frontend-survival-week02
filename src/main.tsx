import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  const appComponent = React.createElement(App, null);
  root.render(appComponent);
}

main();
