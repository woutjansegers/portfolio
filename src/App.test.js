import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Wout Jansegers/i })).toBeInTheDocument();
});
