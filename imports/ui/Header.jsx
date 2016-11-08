import React, { Component } from 'react';
import SignIn from './SignIn';

export default class Header extends Component {
    render() {
        return (
            <div>

                    <div className="header">
                        <SignIn/>
                    </div>

            </div>
        );
    }
}