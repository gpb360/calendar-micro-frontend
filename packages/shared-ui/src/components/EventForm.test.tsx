import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EventForm } from './EventForm';

describe('EventForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    render(<EventForm onSubmit={mockOnSubmit} onClose={mockOnClose} />);
  });

  it('renders form fields', () => {
    expect(screen.getByRole('textbox', { name: /event title/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/event date/i)).toBeInTheDocument();
  });

  it('calls onSubmit with form data when submitted', () => {
    fireEvent.change(screen.getByRole('textbox', { name: /event title/i }), { target: { value: 'Test Event' } });
    fireEvent.change(screen.getByLabelText(/event date/i), { target: { value: '2023-07-01' } });
    fireEvent.click(screen.getByRole('button', { name: /add event/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith({ title: 'Test Event', date: '2023-07-01' });
  });

  it('calls onClose when Cancel button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(mockOnClose).toHaveBeenCalled();
  });
});
