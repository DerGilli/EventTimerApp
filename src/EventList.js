import React from 'react';
import "./css/EventList.css";
import EventListItem from "./EventListItem.js";

const EventList = ({ events, changeCurrentEvent, deleteEvent }) => {

  const eventItmes = events.map((x, idx) =>
    <EventListItem
      key={idx} event={x}
      changeCurrentEvent={changeCurrentEvent}
      deleteEvent={deleteEvent} />)

  return (
    <ul className="EventList">
      {eventItmes}
    </ul>
  )
}

export default EventList; 