import React, { Component } from 'react';
import Header from './Header';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <SignUp/>
                <SignIn/>
            </div>
        );
    }
}