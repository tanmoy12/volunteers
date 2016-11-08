import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import {Events} from '../api/events';
import Event from './Event';
import Header from './Header';
import CreateEvent from './CreateEvent';

class Dashboard extends Component {
    waitForUser(){
        if(Meteor.loggingIn()){
            return <p>Loading</p>
        }else{
            return <p>{Meteor.user().username}</p>
        }
    }

    renderEvents() {
        let filteredEvents = this.props.events;

        return filteredEvents.map(function (eventDetails) {

            return <Event key={eventDetails._id} eventdetails={eventDetails} />
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <ul className="nav nav-tabs">
                    <Header username={this.waitForUser()} />
                </ul>
                <ul className="nav nav-tabs">
                    <CreateEvent/>
                </ul>
                <ul className="nav nav-tabs">
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
