import React, { useState, useEffect } from 'react';
//import '../css/CurrentEvent.css'
import Card from 'react-bootstrap/Card'


const CurrentEvent = ({ event }) => {

  //we only need this date state because of the tick function that will rerender the component every second
  //disable error message for unused vars
  // eslint-disable-next-line
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date())
  }

  //hook up the timer on mount, clear timer on unmount. This is done in the return.
  useEffect(() => {
    const timerID = setInterval(
      () => tick(),
      1000
    )
    return () => {
      clearInterval(timerID)
    }
  }, [])

  if (event === null) return <div className="CurrentEvent"><h1>no event selected</h1></div>

  //do the math to calculate the countdown
  let countdownDate = new Date(event.date).getTime()
  let now = new Date().getTime()
  let dist = countdownDate - now
  let d = Math.floor(dist / (1000 * 60 * 60 * 24))
  let h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((dist % (1000 * 60)) / 1000);

  return (
    // <div className="CurrentEvent" style={{ backgroundImage: 'url(' + event.url + ')' }}>
    //   <h1>{event.name}</h1>
    //   <h1></h1>
    // </div>
    <Card className="d-flex justify-content-end" style={{ backgroundImage: 'url(' + event.url + ')', backgroundSize: "cover", backgroundPosition: "center", minHeight: "200px", flex: "1 1 0" }}>
      <Card.Title as="h1" className="w-100 text-center m-0 py-2 text-white" style={{ backgroundColor: "rgba(0,0,0,0.4)", fontSize: "1em" }}>{event.name}</Card.Title>
      <Card.Text as="h2" className="w-100 text-center mb-2 py-2 text-white" style={{ backgroundColor: "rgba(0,0,0,0.4)", fontSize: "1em" }}>
        {d} Days, {h} Hours, {m} Minutes, {s} Seconds
            </Card.Text>
    </Card >
  );
}

export default CurrentEvent;