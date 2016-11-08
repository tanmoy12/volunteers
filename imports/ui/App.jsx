import React, { Component } from 'react';
import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Features from './Features'

export default class App extends Component {
    render() {
        return (

            <div>

                <div className="container">
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
        );
    }
}
