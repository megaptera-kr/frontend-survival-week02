import { createElement } from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  render(createElement(App));

  screen.getByText(/Hello, bomee!/);
});
