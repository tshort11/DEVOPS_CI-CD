import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with a heading or main element', () => {
  render(<App />);
  const heading = screen.getByRole('heading') || screen.getByRole('main');
  expect(heading).toBeInTheDocument();
});
