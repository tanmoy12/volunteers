import React, { Component } from 'react';
import {Events} from '../api/events';
import {Volunteers} from '../api/volunteers';


export default class Event extends Component {
    renderVolunteers() {
        let volunteerList = Volunteers.find({eventId: this.props.eventdetails._id}).fetch();

        return volunteerList.map(function (eventVolunteer) {
            return <p key={eventVolunteer.volunteerId}>username</p>
        });
    }
    removeEvent(e){
        Events.remove(this.props.eventdetails._id);
    }
    joinEvent(e){
        let eventid= this.props.eventdetails._id;
        let volunteerid= Meteor.userId();
        Volunteers.insert({
            eventId: eventid,
            volunteerId: volunteerid
        });
    }
    removefromEvent(e){
        let eventid= this.props.eventdetails._id;
        let volunteerid= Meteor.userId();

        let doc= Volunteers.findOne({
            eventId: eventid,
            volunteerId: volunteerid
        });

        Volunteers.remove(doc._id);
    }
    render() {
        return (
            <div className="container">
                <h2>{this.props.eventdetails.eventname}</h2>
                <h3>{this.props.eventdetails.location}</h3>
                <h3>{this.props.eventdetails.date}</h3>

                <button onClick={this.removeEvent.bind(this)} className="btn btn-md btn-warning">DELETE</button>
                <button onClick={this.joinEvent.bind(this)} className="btn btn-md btn-warning">JOIN</button>
                <button onClick={this.removefromEvent.bind(this)} className="btn btn-md btn-warning">REMOVE</button>
                {this.renderVolunteers()}
            </div>
        );
    }
}
