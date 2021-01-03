import React, { useState } from 'react';
//import '../css/AddEvent.css'
import Progressbar from './Progressbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const AddEvent = ({ addNewEvent, className }) => {

  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);
  const allowedTypes = ['image/png', 'image/jpeg'];

  //Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  }

  const handleNameChange = (e) => {
    setEventName(e.target.value)
  }

  const handleFileChange = (e) => {
    setImageUrl(null)
    let selectedFile = e.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile)
      console.log(selectedFile.name)
    } else {
      setFile(null)
    }
  }

  const handleAddEvent = (e) => {
    e.preventDefault()
    handleClose()
    addNewEvent({
      name: eventName,
      date: eventDate,
      url: imageUrl
    })
    setImageUrl(null)
  }


  let button =
    <>

      <Button className="w-100 text-uppercase" variant="primary" onClick={handleShow}>
        Add new Event
      </Button>

      <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Enter event name" value={eventName} onChange={handleNameChange} />
            </Form.Group>

            <Form.Group controlId="formEventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control type="datetime-local" value={eventDate} onChange={handleDateChange} />
            </Form.Group>

            <Form.Group>
              <Form.File id="formFileControl" label="Background Image" onChange={handleFileChange} />
              {file && <Progressbar file={file} setFile={setFile} setImageUrl={setImageUrl} />}
            </Form.Group>

            <Button className="w-100" variant="primary" type="submit" onClick={handleAddEvent} disabled={file && !imageUrl ? true : false}>
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>

  return button

}

export default AddEvent;