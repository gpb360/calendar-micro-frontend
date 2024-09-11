import React from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';

interface EventFormProps {
  onSubmit: (event: { title: string; date: string }) => void;
  onClose: () => void;
}

export const EventForm: React.FC<EventFormProps> = ({ onSubmit, onClose }) => {
  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, date });
    setTitle('');
    setDate('');
  };

  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add New Event
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Event Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{ shrink: true }}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add Event
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
