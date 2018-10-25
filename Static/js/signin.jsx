import React from "react";
import GoogleLogin from "react-google-login";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: JSON.parse(localStorage.getItem('userInfo'))
        }
        console.log(this.state.user);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.failure = this.failure.bind(this);
    }

    login(user) {
        this.setState({
            user: user
        });
        localStorage.setItem('userInfo', JSON.stringify(user));
    }

    logout() {
        this.setState({
            user: null
        });
        localStorage.clear();
    }

    failure(response) {
        console.log(response);
    }

    render() {
        if (this.state.user) {
            return (
                <div style={{ color: "white" }}>
                    <button style={{ cursor: "pointer", backgroundColor: "#333333", color: "white" }}
                            onClick={this.logout}>Logout</button>
                    {this.state.user.profileObj.name}
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