import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HomePageProgress from './index';

// Mock timers for testing the progress animation
describe('HomePageProgress', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders the progress component', () => {
    render(<HomePageProgress />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
  });

  it('starts with initial progress value of 5', () => {
    render(<HomePageProgress />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '5');
  });

  it('has the correct container styling', () => {
    const { container } = render(<HomePageProgress />);
    const outerContainer = container.firstChild as HTMLElement;
    expect(outerContainer).toHaveClass(
      'flex',
      'items-center',
      'justify-center'
    );
  });

  it('has the correct progress root styling', () => {
    render(<HomePageProgress />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveClass(
      'relative',
      'overflow-hidden',
      'bg-gray-200',
      'rounded-full',
      'w-64',
      'h-4'
    );
  });

  it('has the correct indicator styling', () => {
    const { container } = render(<HomePageProgress />);
    const indicator = container.querySelector('.bg-blue-500');
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveClass(
      'bg-blue-500',
      'h-full',
      'transition-transform',
      'duration-500'
    );
  });

  it('component initializes and renders without errors', () => {
    render(<HomePageProgress />);
    const progressbar = screen.getByRole('progressbar');

    // Check that it starts with the initial value
    expect(progressbar).toHaveAttribute('aria-valuenow', '5');

    // Check that the interval is set up (component doesn't crash)
    expect(progressbar).toBeInTheDocument();
  });

  it('component sets up interval timer', () => {
    const setIntervalSpy = vi.spyOn(global, 'setInterval');
    render(<HomePageProgress />);

    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  it('cleans up timer on unmount', () => {
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');
    const { unmount } = render(<HomePageProgress />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
