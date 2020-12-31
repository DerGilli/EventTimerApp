import React, { useState } from 'react';
import './css/AddEvent.css'
import Progressbar from './Progressbar';

const AddEvent = ({ addNewEvent }) => {

  const [showInput, setShowInput] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);
  const allowedTypes = ['image/png', 'image/jpeg'];


  const handleDateChange = (e) => {
    setEventDate(e.target.value);
  }

  const handleNameChange = (e) => {
    setEventName(e.target.value)
  }

  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile)
    } else {
      setFile(null)
    }
  }

  const handleAddEvent = (e) => {
    setShowInput(false);
    addNewEvent({
      name: eventName,
      date: eventDate,
      url: imageUrl
    })
    setImageUrl(null)
  }


  let button;
  if (!showInput) {
    button =
      <button className="btn-add" onClick={(e) => setShowInput(true)} >Add Event</button>
  } else {
    button =
      <div className="AddEvent">
        <input
          type="text"
          placeholder="name"
          value={eventName}
          onChange={(e) => handleNameChange(e)} />
        <input
          onChange={(e) => handleDateChange(e)}
          type="datetime-local"
          placeholder="datum"
          value={eventDate} />
        <input
          type="file"
          onChange={handleFileChange} />
        {file && <Progressbar file={file} setFile={setFile} setImageUrl={setImageUrl} />}
        <button onClick={(e) => handleAddEvent(e)} disabled={file && !imageUrl ? true : false} >+</button>
      </div>
  }

  return button

}

export default AddEvent;