import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Events} from '../api/events';
import {Volunteers} from '../api/volunteers';


export default class Event extends Component {
    constructor(props) {
        super(props);
        let join=false,leave=false,remove=false;

        if(this.props.eventdetails.UserId == Meteor.userId()){
            remove= true;
        }
        let volunteerList = Volunteers.find({eventId: this.props.eventdetails._id, volunteerId: Meteor.userId()}).fetch();
        if(volunteerList.size>0){
            leave=true;
        }else{
            join=true;
        }
        console.log(join);
        console.log(leave);
        console.log(remove);
        this.state = {
            join: join,
            leave:leave,
            remove: remove
        };
    }
    renderVolunteers() {

        let volunteerList = Volunteers.find({eventId: this.props.eventdetails._id}).fetch();

        return volunteerList.map(function (eventVolunteer) {
            var doc = Meteor.users.find({_id: eventVolunteer.volunteerId}).fetch();
            console.log(eventVolunteer._id);
            console.log(doc[0].username);
            return <span key={eventVolunteer._id}> {doc[0].username}</span>
        });
    }
    removeEvent(e){
        e.preventDefault();

        Events.remove(this.props.eventdetails._id);
        let volunteerList = Volunteers.find({eventId: this.props.eventdetails._id}).fetch();

        volunteerList.map(function (eventVolunteer) {
            Volunteers.remove(eventVolunteer._id)
        });

    }
    joinEvent(e){
        e.preventDefault();
        let eventid= this.props.eventdetails._id;
        let volunteerid= Meteor.userId();
        Volunteers.insert({
            eventId: eventid,
            volunteerId: volunteerid
        });
        this.setState({
            join:false,
            leave:true
        })
    }
    removefromEvent(e){
        e.preventDefault();
        let eventid= this.props.eventdetails._id;
        let volunteerid= Meteor.userId();

        let doc= Volunteers.findOne({
            eventId: eventid,
            volunteerId: volunteerid
        });

        Volunteers.remove(doc._id);
        this.setState({
            join:true,
            leave:false
        })
    }
    render() {
        var joinForm,leaveForm,removeForm;
        if(this.state.join){
            joinForm= (

                <form onSubmit={this.joinEvent.bind(this)}>
                    <button type="submit" className="btn btn-success">JOIN</button>
                </form>
            )
        }
        if(this.state.leave){
            leaveForm= (
                <form onSubmit={this.removefromEvent.bind(this)}>
                    <button type="submit" className="btn btn-md btn-warning">LEAVE</button>
                </form>
            )
        }
        if(this.state.remove){
            removeForm= (

                <form onSubmit={this.removeEvent.bind(this)}>
                    <button type="submit" className="btn btn-danger">REMOVE</button>
                </form>
            )
        }
        console.log(joinForm);
        return (
            <div className="container-fluid">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="text-success">
                                {this.props.eventdetails.eventname}

                            </h3>
                            <h3>{this.props.eventdetails.location}</h3>
                            <h3>{this.props.eventdetails.date}</h3>

                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4">
                                    {joinForm}
                                </div>
                                <div className="col-md-4">
                                    {leaveForm}

                                </div>
                                <div className="col-md-4">
                                    {removeForm}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="list-group">
                        <a href="#" className="list-group-item active">Volunteers</a>
                        <div className="list-group-item">
                            {this.renderVolunteers()}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}