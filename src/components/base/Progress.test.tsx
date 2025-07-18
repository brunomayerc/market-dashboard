import { render } from '@testing-library/react';
import { Progress } from './Progress';

describe('Progress', () => {
  it('renders Progress.Root component', () => {
    const { container } = render(
      <Progress.Root value={50}>
        <Progress.Indicator />
      </Progress.Root>
    );

    const progressRoot = container.querySelector('[role="progressbar"]');
    expect(progressRoot).toBeInTheDocument();
  });

  it('sets the correct aria-valuenow attribute', () => {
    const { container } = render(
      <Progress.Root value={75}>
        <Progress.Indicator />
      </Progress.Root>
    );

    const progressRoot = container.querySelector('[role="progressbar"]');
    expect(progressRoot).toHaveAttribute('aria-valuenow', '75');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Progress.Root value={25} className="custom-class">
        <Progress.Indicator />
      </Progress.Root>
    );

    const progressRoot = container.querySelector('[role="progressbar"]');
    expect(progressRoot).toHaveClass('custom-class');
  });

  it('renders Progress.Indicator component', () => {
    const { container } = render(
      <Progress.Root value={50}>
        <Progress.Indicator className="indicator-class" />
      </Progress.Root>
    );

    const indicator = container.querySelector('.indicator-class');
    expect(indicator).toBeInTheDocument();
  });
});
