import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(screen.getByText('StockMarket Dashboard BETA')).toBeInTheDocument();
  });

  it('renders the HomePageProgress component', () => {
    render(<App />);
    const progressComponent = screen.getByRole('progressbar');
    expect(progressComponent).toBeInTheDocument();
  });

  it('has the correct CSS classes for styling', () => {
    render(<App />);
    const container = screen
      .getByText('StockMarket Dashboard BETA')
      .closest('div');
    expect(container).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'h-screen',
      'bg-gray-100'
    );
  });

  it('heading has the correct styling classes', () => {
    render(<App />);
    const heading = screen.getByText('StockMarket Dashboard BETA');
    expect(heading).toHaveClass(
      'text-4xl',
      'font-bold',
      'text-blue-600',
      'mb-4'
    );
  });
});
