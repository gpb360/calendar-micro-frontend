import React from 'react';
import { List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <Checkbox edge="start" checked={task.completed} onChange={() => onToggleTask(task.id)} />
          <ListItemText primary={task.title} />
        </ListItem>
      ))}
    </List>
  );
};
