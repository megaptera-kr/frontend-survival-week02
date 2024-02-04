import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  const appComponent = React.createElement(App, null);
  render(appComponent);

  screen.getByText(/Hello, wholeman!/);
});
