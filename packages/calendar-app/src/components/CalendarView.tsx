import React from 'react';
import { LoadingSpinner, Paper, Grid, Typography, Button } from '@your-org/shared-ui';
import { useEvents, useIsLoading, useRemoveEvent } from '@your-org/state-management';

const CalendarView: React.FC = () => {
  const [events] = useEvents();
  const [isLoading] = useIsLoading();
  const [, removeEvent] = useRemoveEvent();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Calendar View
      </Typography>
      <Grid container spacing={2}>
        {events.map((event) => (
          <Grid item xs={12} key={event.id}>
            <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <Typography variant="subtitle1">{event.title}</Typography>
                <Typography variant="body2">{new Date(event.date).toLocaleDateString()}</Typography>
              </div>
              <Button onClick={() => removeEvent(event.id)} color="secondary">
                Remove
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CalendarView;
