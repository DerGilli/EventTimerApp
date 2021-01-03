import React from 'react';
//import '../css/EventListItem.css'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const EventListItem = ({ event, deleteEvent, changeCurrentEvent }) => {

  const handleClick = (e) => {
    if (!e.target.classList.contains("btn")) {
      changeCurrentEvent(event);
    }
  }

  const handleDelete = (e) => {
    deleteEvent(event);
  }

  return (
    <ListGroup.Item action onClick={(e) => handleClick(e)} as="div" className="d-flex justify-content-between align-items-center">
      <label className="m-0 h3">{event.name}</label>
      <Button variant="danger" onClick={(e) => handleDelete(e)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
    </ListGroup.Item>
  )
}

export default EventListItem;