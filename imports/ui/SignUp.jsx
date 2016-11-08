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
                    <div className="col-sm-9">
                        <div className="form-group">

                                <input ref="username" type="text" placeholder="Username"
                                       className="form-control"/>

                        </div>


                        <div className="form-group">
                            <input type="text" placeholder="Email or mobile number" ref="email"
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="New password" ref="password"
                                   className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-md btn-success">Sign Up</button>
                        <br/>
                        <p>{this.state.message}</p>
                    </div>
                </form>

            </div>
        );
    }
}