import React from 'react';
import './EventListItem.css'

class EventListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        opacity: 1
        // backgroundImage: "url(/static/media/firework.0149528f.jpg)"
      }
    }
  }

  componentWillUnmount() {
    this.setState({ style: { opacity: 0 } })
  }

  handleClick(e) {
    e.preventDefault();
    this.props.changeCurrentEvent(this.props.event);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteEvent(this.props.event);
  }

  render() {
    return (
      <li style={this.state.style} className="EventListItem">
        <button className="btn-select" onClick={(e) => this.handleClick(e)}>
          {this.props.event.name}
        </button>
        <button className="btn-dngr" onClick={(e) => this.handleDelete(e)}>x</button>
      </li>
    )
  }
}

export default EventListItem;