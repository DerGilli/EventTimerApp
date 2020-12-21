import React from 'react';
import './App.css';
import CurrentEvent from './CurrentEvent';
import AddEvent from './AddEvent';
import EventList from './EventList';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.events = [{
      date: "2021-01-01T00:00",
      name: "Silvester"
    },
    {
      date: "2021-10-04T00:00",
      name: "Mein Geburtstag"
    },
    {
      date: "2021-11-23T00:00",
      name: "Schatzi Geburtstag"
    }]

    this.state = {
      events: this.events,
      currentEvent: this.events[2]
    }
    this.newEvent = { name: "", date: "" }
  }

  addNewEvent() {
    const events = this.state.events.slice();
    events.push(this.newEvent);
    this.setState({ events: events });
  }

  changeCurrentEvent(selectedEvent) {
    this.setState({ currentEvent: selectedEvent });
  }

  deleteEvent(eventToDelete) {
    const events = this.state.events
    events.splice(events.indexOf(eventToDelete), 1)
    this.setState({ events: events });
  }

  render() {
    return (
      <div className="App">
        <CurrentEvent event={this.state.currentEvent} />
        <AddEvent
          newEvent={this.newEvent}
          addNewEvent={() => this.addNewEvent()} />
        <EventList
          events={this.state.events}
          changeCurrentEvent={(selectedEvent) => this.changeCurrentEvent(selectedEvent)}
          deleteEvent={(eventToDelete) => this.deleteEvent(eventToDelete)} />
      </div>
    );
  }
}

export default App;