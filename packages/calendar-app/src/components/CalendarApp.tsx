import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'jotai';
import { theme, Header, ErrorBoundary, EventForm, ThemeProvider, CssBaseline, Container } from '@your-org/shared-ui';
import CalendarView from './CalendarView';
import { calendarStore, useAddEvent } from '@your-org/state-management';

const CalendarApp: React.FC = () => {
  const [isAddingEvent, setIsAddingEvent] = React.useState(false);
  const [, addEvent] = useAddEvent();

  const handleAddEvent = () => {
    setIsAddingEvent(true);
  };

  const handleCloseEventForm = () => {
    setIsAddingEvent(false);
  };

  const handleSubmitEvent = (event: { title: string; date: string }) => {
    addEvent(event);
    setIsAddingEvent(false);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title="Calendar App" onAddEvent={handleAddEvent} />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <CalendarView />
          {isAddingEvent && <EventForm onSubmit={handleSubmitEvent} onClose={handleCloseEventForm} />}
        </Container>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default CalendarApp;

