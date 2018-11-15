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
        axios.post("/Login/", user)
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
        axios.post("/Logout/")
    }

    failure(response) {
        alert("Could not sign in");
        console.log(response);
    }

    render() {
        if (this.state.user) {
            return (
                <div style={{ color: "white" }}>
                    {this.state.user.name}
                    <button 
                        className="login-logout-button" 
                        onClick={this.logout}>Logout
                    </button>
                </div>

            );
        }
        return (
            <GoogleLogin
                clientId={window.CLIENT_ID}
                buttonText="Sign In With Google"
                onSuccess={this.login}
                onFailure={this.failure}
                className="login-logout-button"
            />
        );
    }
}