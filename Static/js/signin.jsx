import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.failure = this.failure.bind(this);
    }

    login(user) {
        axios.post("http://localhost:5000/Login", user)
            .then(() => {
                window.location.reload();
            }).catch(error => {
                alert("Could not sign in");
                console.log(error);
            })
    }

    logout() {
        this.setState({
            user: null
        });
        axios.post("http://localhost:5000/Logout")
    }

    failure(response) {
        alert("Could not sign in");
        console.log(response);
    }

    render() {
        if (this.state.user) {
            return (
                <div style={{ color: "white" }}>
                    <button style={{ cursor: "pointer", backgroundColor: "#333333", color: "white" }}
                            onClick={this.logout}>Logout</button>
                    {this.state.user.name}
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