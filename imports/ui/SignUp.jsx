import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
    handleRegister(e){
        e.preventDefault();

        that=this;
        var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var User ={
            username: username,
            email: email,
            password: password
        };
        Accounts.createUser(User, function (err) {
            if(err){
                that.setState({
                    message: err.reason
                });
            }
            else{
                FlowRouter.go('/dashboard');
            }
        });

    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleRegister.bind(this)}>
                    <input ref="username" type="text" placeholder="username"/>
                    <input ref="email" type="text" placeholder="email"/>
                    <input ref="password" type="password" placeholder="password" name="" id=""/>
                    <button type="submit" className="btn btn-md btn-success">Sign Up</button>
                    <p>{this.state.message}</p>

                </form>

            </div>
        );
    }
}