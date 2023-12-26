import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  // render(<App />);
  render(React.createElement(App, null, null));

  const text = screen.getByText(/Hello, wholeman!/);
  expect(text).toBeInTheDocument();
});
