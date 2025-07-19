import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Watchlist from './Watchlist';

describe('Watchlist', () => {
  it('renders watchlist heading', () => {
    render(<Watchlist />);

    expect(screen.getByText('Watchlist')).toBeInTheDocument();
  });
});
