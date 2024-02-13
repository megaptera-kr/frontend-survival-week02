import { render, screen } from '@testing-library/react';

import { createElement } from 'react';
import App from './App';

test('App', () => {
  const app = createElement(App);
  render(app);

  screen.getByText(/Hello, wholeman!/);
});
