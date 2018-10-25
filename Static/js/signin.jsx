import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from 'react-google-login';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            user: null
        }

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.failure = this.failure.bind(this);
    }

    login(user) {
        this.setState({
            loggedIn: true,
            user: user
        });
    }

    logout() {
        this.setState({
            loggedIn: false,
            user: null
        });
    }

    failure(response) {
        console.log(response);
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div style={{ color: "white" }}>
                    <GoogleLogout
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}
                        onLogoutFailure={this.failure}
                        style={{ cursor: "pointer", backgroundColor: "#333333", color: "white" }}
                    />
                    {this.state.user.getBasicProfile().getName()}
                </div>

            );
        }
        return (
            <GoogleLogin
                clientId="381930517371-emjlrrknknbbj3u0jm50h24l9tdjkipj.apps.googleusercontent.com"
                buttonText="Sign In With Google"
                onSuccess={this.login}
                onFailure={this.failure}
                style={{ cursor: "pointer", backgroundColor: "#333333", color: "white" }}
            />
        );
    }
}