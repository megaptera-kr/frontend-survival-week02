import ReactDOM from 'react-dom/client';

import { createElement } from 'react';
import App from './App';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render(createElement(App, null, null));
}

main();
