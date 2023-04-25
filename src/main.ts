import ReactDOM from 'react-dom/client';

import React from 'react';
import App from './App';

function main(): void {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(
    React.createElement(App, null),

  // <App />
  );
}

main();
