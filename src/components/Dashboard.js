import React, { useState } from 'react'
import CurrentEvent from './CurrentEvent';
import AddEvent from './AddEvent';
import EventList from './EventList';
import { Container } from 'react-bootstrap';

function Dashboard() {

  const saveEventsToLocalStorage = (eventsToSave) => {
    localStorage.setItem('events', JSON.stringify(eventsToSave))
  }

  const readEventsfromLocalStorage = () => {

    const tmpEventString = localStorage.getItem('events')
    if (tmpEventString === null) return []

    try {
      const tmpEvents = []
      tmpEvents.push(JSON.parse(tmpEventString))
      if (tmpEvents.length > 0) {
        return tmpEvents[0];
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const SavedEvents = readEventsfromLocalStorage();
  let selectedEvent;
  SavedEvents.length > 0 ? selectedEvent = SavedEvents[0] : selectedEvent = null;

  const [events, setEvents] = useState(SavedEvents);
  const [currentEvent, setCurrentEvent] = useState(selectedEvent);

  const addNewEvent = ({ name, date, url }) => {
    const tmpEvents = events.slice();
    tmpEvents.push({ name, date, url });
    setEvents(tmpEvents);
    saveEventsToLocalStorage(tmpEvents)
  }

  const changeCurrentEvent = (selectedEvent) => {
    setCurrentEvent(selectedEvent);
  }

  const deleteEvent = (eventToDelete) => {
    // slice the events object to create a new object instead of just pointing to the same position in memory.
    // only this way react will notice a change an rerender child components
    const tmpEvents = events.slice();
    tmpEvents.splice(events.indexOf(eventToDelete), 1)
    setEvents(tmpEvents)
    saveEventsToLocalStorage(tmpEvents)
  }

  return (
    <Container>
      <CurrentEvent event={currentEvent} />
      <EventList
        events={events}
        changeCurrentEvent={(selectedEvent) => changeCurrentEvent(selectedEvent)}
        deleteEvent={(eventToDelete) => deleteEvent(eventToDelete)} />
      <AddEvent className="w-100" addNewEvent={(event) => addNewEvent(event)} />
    </Container>
  )
}

export default Dashboard
