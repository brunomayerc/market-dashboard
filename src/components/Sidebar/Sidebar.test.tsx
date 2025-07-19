import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders sidebar menu items', () => {
    render(<Sidebar />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Watchlist')).toBeInTheDocument();
    expect(screen.getByText('User Settings')).toBeInTheDocument();
    expect(screen.getByText('StockScope')).toBeInTheDocument();
  });

  it('handles menu item clicks', () => {
    const mockOnMenuItemClick = vi.fn();
    render(<Sidebar onMenuItemClick={mockOnMenuItemClick} />);

    const watchlistButton = screen.getByRole('button', { name: 'Watchlist' });
    fireEvent.click(watchlistButton);

    expect(mockOnMenuItemClick).toHaveBeenCalledWith('watchlist');
  });

  it('has basic accessibility attributes', () => {
    render(<Sidebar />);

    // Check navigation structure has proper labels
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toHaveAttribute('aria-label', 'Main navigation');

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');

    // Check that menu items are accessible as buttons
    const dashboardButton = screen.getByRole('button', { name: 'Dashboard' });
    expect(dashboardButton).toBeInTheDocument();
    expect(dashboardButton).toHaveAttribute('aria-current', 'page');
  });
});
