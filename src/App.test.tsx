import { render, screen } from '@testing-library/react';
import React from 'react';

import App2 from './App';

test('App', () => {
  render(React.createElement(App2, null));

  screen.getByText(/Hello, wholeman!/);
});
