import React from 'react';
import "./EventList.css";
import EventListItem from "./EventListItem.js";

class EventList extends React.Component {

  render() {
    const events = this.props.events.map((x) => <EventListItem
      key={x.date} event={x}
      changeCurrentEvent={this.props.changeCurrentEvent}
      deleteEvent={this.props.deleteEvent} />)
    return (
      <ul className="EventList">
        {events}
      </ul>
    )
  }
}

export default EventList; 