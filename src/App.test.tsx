import { render, screen } from '@testing-library/react';

import { createElement } from 'react';
import App from './App';

test('App', () => {
  render(createElement(App, null, null));

  screen.getByText(/Hello, wholeman!/);
});
