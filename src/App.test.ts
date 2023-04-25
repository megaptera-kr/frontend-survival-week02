import { render, screen } from '@testing-library/react';
import { createElement } from 'react';
import App from './App';

// test('App', () => {
//   render(createElement(App));
//   expect(screen.queryByText(/Hello, wholeman!/)).toBeInTheDocument();
// });

const context = describe;
describe('App을', () => {
  context('rendering 했을 때', () => {
    render(createElement(App));
    it('Hello, Wholeman! 문구를 찾을 수 있다.', () => {
      expect(screen.queryByText(/Hello, wholeman!/)).toBeInTheDocument();
    });
  });
});
