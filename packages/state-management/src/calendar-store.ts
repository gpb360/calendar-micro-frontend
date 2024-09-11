import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Define the Event type
export interface Event {
  id: string;
  title: string;
  date: string;
}

// Create an atom for storing events
const eventsAtom = atomWithStorage<Event[]>('calendarEvents', []);

// Create an atom for the loading state
const isLoadingAtom = atom(false);

// Create a derived atom for adding a new event
const addEventAtom = atom(null, (get, set, newEvent: Omit<Event, 'id'>) => {
  const events = get(eventsAtom);
  const id = Date.now().toString(); // Simple ID generation
  set(eventsAtom, [...events, { ...newEvent, id }]);
});

// Create a derived atom for removing an event
const removeEventAtom = atom(null, (get, set, id: string) => {
  const events = get(eventsAtom);
  set(
    eventsAtom,
    events.filter((event) => event.id !== id),
  );
});

// Custom hooks
export const useEvents = () => useAtom(eventsAtom);
export const useIsLoading = () => useAtom(isLoadingAtom);
export const useAddEvent = () => useAtom(addEventAtom);
export const useRemoveEvent = () => useAtom(removeEventAtom);

// Create the calendar store
export const calendarStore = {
  eventsAtom,
  isLoadingAtom,
  addEventAtom,
  removeEventAtom,
};
