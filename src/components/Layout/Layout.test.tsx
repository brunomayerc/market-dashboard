import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Layout from './Layout';

describe('Layout', () => {
  it('renders dashboard page by default', () => {
    render(<Layout />);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders sidebar navigation', () => {
    render(<Layout />);

    expect(screen.getByRole('complementary')).toBeInTheDocument();
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
    expect(screen.getByText('StockScope AI')).toBeInTheDocument();
    expect(screen.getByText('User Settings')).toBeInTheDocument();
  });
});
