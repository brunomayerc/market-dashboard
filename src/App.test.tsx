import { render, screen } from '@testing-library/react';
import App from './App';

test('App > renders the dashboard page by default', () => {
  render(<App />);
  
  expect(screen.getByRole('main')).toBeInTheDocument();
});

test('App > renders the sidebar navigation', () => {
  render(<App />);
  
  expect(screen.getByRole('complementary')).toBeInTheDocument();
  expect(screen.getByText('Watchlist')).toBeInTheDocument();
  expect(screen.getByText('StockScope AI')).toBeInTheDocument();
  expect(screen.getByText('User Settings')).toBeInTheDocument();
});
