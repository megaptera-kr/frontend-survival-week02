import { render, screen } from '@testing-library/react';

import React from 'react';

import App from './App';

test('App', () => {
  const element = React.createElement(App, null, null);

  render(element);

  screen.getByText(/Hello, wholeman!/);
});
