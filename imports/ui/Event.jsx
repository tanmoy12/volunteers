import React, { Component } from 'react';

export default class Event extends Component {

    render() {
        return (
            <div className="container">
                <h2>{this.props.eventdetails.eventname}</h2>
                <h3>{this.props.eventdetails.location}</h3>
                <h3>{this.props.eventdetails.date}</h3>
            </div>
        );
    }
}
