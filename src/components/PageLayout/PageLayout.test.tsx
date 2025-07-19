import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PageLayout from './PageLayout';

describe('PageLayout', () => {
  it('renders page title', () => {
    render(<PageLayout title="Test Page" />);

    expect(screen.getByText('Test Page')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <PageLayout title="Test Page">
        <div>Test content</div>
      </PageLayout>
    );

    expect(screen.getByText('Test Page')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
