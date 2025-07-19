import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserSettings from './UserSettings';

describe('UserSettings', () => {
  it('renders user settings heading', () => {
    render(<UserSettings />);

    expect(screen.getByText('User Settings')).toBeInTheDocument();
  });
});
