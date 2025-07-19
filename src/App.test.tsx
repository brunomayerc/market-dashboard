import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the dashboard page by default', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders the sidebar navigation', () => {
    render(<App />);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
    expect(screen.getByText('StockScope AI')).toBeInTheDocument();
    expect(screen.getByText('User Settings')).toBeInTheDocument();
  });
});
