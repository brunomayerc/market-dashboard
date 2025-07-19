import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders sidebar menu items', () => {
    render(<Sidebar />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
    expect(screen.getByText('User Settings')).toBeInTheDocument();
    expect(screen.getByText('StockScope')).toBeInTheDocument();
  });

  it('toggles sidebar open and close', () => {
    render(<Sidebar />);

    const toggleButton = screen.getByRole('button', {
      name: /toggle sidebar/i,
    });
    const sidebar = screen.getByTestId('sidebar');
    const dashboardText = screen.getByTestId('menu-text-dashboard');

    // Initially expanded - sidebar should not be collapsed
    expect(sidebar).toHaveAttribute('data-collapsed', 'false');
    expect(dashboardText).not.toHaveAttribute('aria-hidden', 'true');

    // Click to collapse
    fireEvent.click(toggleButton);

    // Sidebar should be collapsed and text should be hidden
    expect(sidebar).toHaveAttribute('data-collapsed', 'true');
    expect(dashboardText).toHaveAttribute('aria-hidden', 'true');

    // Click to expand again
    fireEvent.click(toggleButton);

    // Sidebar should be expanded and text should be visible
    expect(sidebar).toHaveAttribute('data-collapsed', 'false');
    expect(dashboardText).not.toHaveAttribute('aria-hidden', 'true');
  });
});
