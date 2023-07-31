import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

const e = React.createElement;

test('App', () => {
  render(e(App));

  screen.getByText(/Hello, wholeman!/);
});
