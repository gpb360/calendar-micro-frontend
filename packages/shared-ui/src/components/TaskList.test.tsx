import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskList } from './TaskList';

const mockTasks = [
  { id: '1', title: 'Task 1', completed: false },
  { id: '2', title: 'Task 2', completed: true },
];

describe('TaskList', () => {
  const mockOnToggleTask = jest.fn();
  const mockOnDeleteTask = jest.fn();

  beforeEach(() => {
    render(<TaskList tasks={mockTasks} onToggleTask={mockOnToggleTask} onDeleteTask={mockOnDeleteTask} />);
  });

  it('renders all tasks', () => {
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('calls onToggleTask when checkbox is clicked', () => {
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(mockOnToggleTask).toHaveBeenCalledWith('1');
  });

  it('calls onDeleteTask when delete button is clicked', () => {
    fireEvent.click(screen.getAllByLabelText('delete')[0]);
    expect(mockOnDeleteTask).toHaveBeenCalledWith('1');
  });
});
