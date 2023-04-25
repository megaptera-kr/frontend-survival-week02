import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  render(
    React.createElement(App, null),

  // <App />
  );

  screen.getByText(/Hello, wholeman!/);
});
