import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (

                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Events</a></li>
                            <li><a href="badges.html">Profile</a></li>
                            <li><a href="badges.html">{this.props.currentUser}</a></li>
                        </ul>
                    </div>
                </nav>

        );
    }
}