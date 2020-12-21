import React from 'react';
import './AddEvent.css'

class AddEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addNewEvent: false,
      value: "",
      date: ""
    };
  }

  showInput(e) {
    this.setState({ addNewEvent: true });
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value })
    this.props.newEvent.date = e.target.value;
  }

  handleNameChange(e) {
    this.setState({ value: e.target.value })
    this.props.newEvent.name = e.target.value;
  }

  handleAddEvent(e) {
    this.setState({ addNewEvent: false });
    this.props.addNewEvent()
  }

  render() {
    const addNewEvent = this.state.addNewEvent;
    let button;
    if (!addNewEvent) {
      button =
        <button className="btn-add" onClick={(e) => this.showInput(e)} >Add Event</button>
    } else {
      button =
        <div className="AddEvent">
          <input
            type="text"
            placeholder="name"
            value={this.state.value}
            onChange={(e) => this.handleNameChange(e)}>
          </input>
          <input
            onChange={(e) => this.handleDateChange(e)}
            type="datetime-local"
            placeholder="datum"
            value={this.state.date}>
          </input>
          <button onClick={(e) => this.handleAddEvent(e)} >+</button>
        </div>
    }
    return (
      button
    );
  }
}

export default AddEvent;