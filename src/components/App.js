import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../css/App.css';
import CurrentEvent from './CurrentEvent';
import AddEvent from './AddEvent';
import EventList from './EventList';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap';

const App = () => {

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
    <Container fluid className="d-flex flex-column min-vh-100" >
      <Row>
        <Navbar className="d-block bg-dark w-100" expand="lg">
          <Navbar.Brand className="text-light px-5">Event Timer</Navbar.Brand>
        </Navbar>
      </Row>
      <Row className="py-3" style={{ flex: "1 1 auto" }}>
        <Col>
          <CurrentEvent event={currentEvent} />
        </Col>
        <Col md="auto" lg="3" className="d-flex flex-column justify-content-between">
          <EventList
            events={events}
            changeCurrentEvent={(selectedEvent) => changeCurrentEvent(selectedEvent)}
            deleteEvent={(eventToDelete) => deleteEvent(eventToDelete)} />
          <AddEvent className="w-100" addNewEvent={(event) => addNewEvent(event)} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;