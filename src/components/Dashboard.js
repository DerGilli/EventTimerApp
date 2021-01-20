import React, { useState, useEffect } from 'react'
import CurrentEvent from './CurrentEvent';
import AddEvent from './AddEvent';
import EventList from './EventList';
import { Container } from 'react-bootstrap';
import { db } from "../firebase/config";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {

  const [events, setEvents] = useState([]);
  const { currentUser } = useAuth()

  function saveEventToDB(newEvent) {
    return db.collection("Events").add({
      Name: newEvent.name,
      Date: newEvent.date,
      User: currentUser.uid,
      Url: newEvent.url
    })
  }

  useEffect(() => {
    db.collection("Events").where("User", "==", currentUser.uid).get().then((snapshot) => {
      let dbEvents = []
      snapshot.docs.forEach(doc => {
        dbEvents.push({ id: doc.id, name: doc.data().Name, date: Date.parse(doc.data().Date), url: doc.data().Url })
      })
      setEvents(dbEvents)
    })
  }, [currentUser])


  let selectedEvent;
  events.length > 0 ? selectedEvent = events[0] : selectedEvent = null;


  const [currentEvent, setCurrentEvent] = useState(selectedEvent);

  const addNewEvent = ({ name, date, url }) => {
    const tmpEvents = events.slice();
    saveEventToDB({ name, date, url }).then((doc) => {
      tmpEvents.push({ id: doc.id, name, date, url });
      setEvents(tmpEvents);
    })
  }

  const changeCurrentEvent = (selectedEvent) => {
    setCurrentEvent(selectedEvent);
  }

  const deleteEvent = (eventToDelete) => {
    // slice the events object to create a new object instead of just pointing to the same position in memory.
    // only this way react will notice a change an rerender child components
    const tmpEvents = events.slice();
    tmpEvents.splice(events.indexOf(eventToDelete), 1).slice()
    try {
      removeEventfromDB(eventToDelete)
    } catch (error) {
      console.log(error)
    }
    setEvents(tmpEvents)
  }

  function removeEventfromDB(eventToDelete) {
    db.collection("Events").doc(eventToDelete.id).delete().then()
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
