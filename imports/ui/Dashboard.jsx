import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import Header from './Header';
import {Events} from '../api/events';
import Event from './Event';

class Dashboard extends Component {
    handleCreateEvent(e){
        e.preventDefault();
        that=this;
        var eventname = ReactDOM.findDOMNode(this.refs.event_name).value.trim();
        var  location= ReactDOM.findDOMNode(this.refs.location).value.trim();
        var date = ReactDOM.findDOMNode(this.refs.date).value.trim();
        Events.insert({
            User: Meteor.user(),
            eventname: eventname,
            location: location,
            date: date,
            createdat: new Date()
        });

    }
    renderEvents() {
        let filteredEvents = this.props.events;

        return filteredEvents.map(function (eventDetails) {
            // var eventDetails= {
            //     eventname: event.eventname,
            //     location: event.location,
            //     date: event.date
            // }
            return <Event key={eventDetails._id} eventdetails={eventDetails} />
        });
    }
    render() {
        console.log(Meteor.user());
        return (
            <div className="container">
                <Header currentUser={Meteor.user().username} />
                <form onSubmit={this.handleCreateEvent.bind(this)}>
                    <div>
                        <input ref="event_name" type="text" placeholder="Event Name"/>
                    </div>
                    <div>
                        <input ref="location" type="text" placeholder="Location"/>
                    </div>
                    <div>
                        <input ref="date" type="text" placeholder="Date" name="" id=""/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-md btn-success">Create Event</button>
                    </div>

                </form>
                <ul>
                    {this.renderEvents()}
                </ul>

            </div>
        );
    }
}


Dashboard.propTypes = {
    events: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    currentUser: PropTypes.object,
};

export default createContainer(() => {
    return {
        events: Events.find({}, { sort: { date: -1 } }).fetch(),
        incompleteCount: Events.find({}).count(),
        currentUser: Meteor.user(),
    };
}, Dashboard);