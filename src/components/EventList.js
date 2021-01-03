import React from 'react';
//import "../css/EventList.css";
import EventListItem from "./EventListItem.js";
import ListGroup from 'react-bootstrap/ListGroup'

const EventList = ({ events, changeCurrentEvent, deleteEvent }) => {

  const eventItmes = events.map((x, idx) =>
    <EventListItem
      key={idx} event={x}
      changeCurrentEvent={changeCurrentEvent}
      deleteEvent={deleteEvent} />)

  return (
    <ListGroup variant="flush">
      {eventItmes}
    </ListGroup>
  )
}

export default EventList; 