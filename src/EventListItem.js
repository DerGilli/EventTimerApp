import React from 'react';
import './css/EventListItem.css'

const EventListItem = ({ event, deleteEvent, changeCurrentEvent }) => {

  const handleClick = (e) => {
    changeCurrentEvent(event);
  }

  const handleDelete = (e) => {
    deleteEvent(event);
  }

  return (
    <li className="EventListItem">
      <button className="btn-select" onClick={(e) => handleClick(e)}>
        {event.name}
      </button>
      <button className="btn-dngr" onClick={(e) => handleDelete(e)}>x</button>
    </li>
  )
}

export default EventListItem;