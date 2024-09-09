import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { CustomDateTimePicker } from './CustomDateTimePicker';

export interface Task {
  id: string;
  title: string;
  datetime: Date;
  status: string;
}

type NewTask = Omit<Task, 'id' | 'status'>;
type EditTask = Partial<Task> & Pick<Task, 'id'>;

interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: NewTask | EditTask) => void;
  task: Task | null;
  mode: 'add' | 'edit';
}

export const TaskDialog: React.FC<TaskDialogProps> = ({ open, onClose, onSave, task, mode }) => {
  const [title, setTitle] = React.useState(task?.title || '');
  const [datetime, setDatetime] = React.useState<Date | null>(task?.datetime || new Date());
  const [status, setStatus] = React.useState(task?.status || 'scheduled');

  const handleSave = () => {
    if (datetime) {
      if (mode === 'edit' && task) {
        onSave({ id: task.id, title, datetime, status });
      } else {
        onSave({ title, datetime });
      }
      onClose();
    } else {
      console.error('Datetime cannot be null');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{mode === 'edit' ? 'Edit Task' : 'Add New Task'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Task Title"
          fullWidth
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
        <CustomDateTimePicker
          label="Date & Time"
          value={datetime}
          onChange={(newValue: Date | null) => setDatetime(newValue)}
        />
        {mode === 'edit' && (
          <FormControl fullWidth margin="dense">
            <InputLabel>Status</InputLabel>
            <Select value={status} onChange={(e) => setStatus(e.target.value as string)}>
              <MenuItem value="scheduled">Scheduled</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="rescheduled">Rescheduled</MenuItem>
              <MenuItem value="canceled">Canceled</MenuItem>
            </Select>
          </FormControl>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
