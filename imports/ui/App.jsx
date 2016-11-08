import React, { Component } from 'react';
import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Features from './Features'

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav nav-tabs">

                            <li className="active">
                                <h3 className="text-center">Register as a volunteer today!</h3>
                            </li>

                        </ul>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <SignIn/>
                                    </div>
                                    <div className="col-md-6">
                                        <SignUp/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
