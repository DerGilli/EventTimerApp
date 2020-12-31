import React, { useState, useEffect } from 'react';
import './css/CurrentEvent.css'


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
    <div className="CurrentEvent" style={{ backgroundImage: 'url(' + event.url + ')' }}>
      <h1>{event.name}</h1>
      <h1>{d} Days, {h} Hours, {m} Minutes, {s} Seconds</h1>
    </div>
  );
}

export default CurrentEvent;