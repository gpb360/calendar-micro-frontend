import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders title', () => {
    render(<Header title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onAddEvent when Add Event button is clicked', () => {
    const mockOnAddEvent = jest.fn();
    render(<Header title="Test Title" onAddEvent={mockOnAddEvent} />);
    fireEvent.click(screen.getByText('Add Event'));
    expect(mockOnAddEvent).toHaveBeenCalled();
  });

  it('does not render Add Event button when onAddEvent is not provided', () => {
    render(<Header title="Test Title" />);
    expect(screen.queryByText('Add Event')).not.toBeInTheDocument();
  });
});
