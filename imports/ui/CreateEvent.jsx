import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import {Events} from '../api/events';

export default class Header extends Component {
    handleCreateEvent(e){
        e.preventDefault();

        var eventname = ReactDOM.findDOMNode(this.refs.event_name).value.trim();
        var  location= ReactDOM.findDOMNode(this.refs.location).value.trim();
        var date = ReactDOM.findDOMNode(this.refs.date).value.trim();
        Meteor.call('events.insert', eventname,location,date);

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-md-12">
                    <form onSubmit={this.handleCreateEvent.bind(this)} role="form">
                        <div className="col-md-9">

                            <input placeholder="Event Name" type="text" className="form-control" id="event_name" ref="event_name" />
                        </div>
                        <div className="col-md-9">

                            <input placeholder="Location" type="text" className="form-control" id="location" ref="location" />
                        </div>
                        <div className="col-md-9">

                            <input placeholder="Date" type="text" className="form-control" id="date" ref="date" />
                        </div>
                        <div className="col-md-9">
                        <button type="submit" className="btn btn-success">
                            Create
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}