import React from 'react';
import './CurrentEvent.css'
class CurrentEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let countdownDate = new Date(this.props.event.date).getTime()
    let now = new Date().getTime()
    let dist = countdownDate - now
    let d = Math.floor(dist / (1000 * 60 * 60 * 24))
    let h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((dist % (1000 * 60)) / 1000);
    return (
      <div className="CurrentEvent">
        <h1>{this.props.event.name}</h1>
        <h1>{d} Days, {h} Hours, {m} Minutes, {s} Seconds</h1>
      </div>
    );
  }
}

export default CurrentEvent;