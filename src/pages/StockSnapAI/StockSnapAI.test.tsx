import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StockSnapAI from './StockSnapAI';

describe('StockSnapAI', () => {
  it('renders StockScope AI heading', () => {
    render(<StockSnapAI />);

    expect(screen.getByText('StockScope AI')).toBeInTheDocument();
  });
});
