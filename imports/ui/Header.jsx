import React, { Component } from 'react';
import SignIn from './SignIn';

export default class Header extends Component {
    logout(e){
        e.preventDefault();
        Meteor.logout();
        FlowRouter.go('/');
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="/dashboard">Home</a>
                        </li>
                        <li className="pull-right">
                            <form action={this.logout.bind(this)}>
                                <button type="submit" className="btn btn-default">
                                    Logout
                                </button>
                            </form>
                        </li>

                        <li className="pull-right">
                            <a href="#" >{this.props.username}</a>

                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}