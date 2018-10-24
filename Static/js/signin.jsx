import React from "react";
import GoogleLogin from "react-google-login";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response) {
        console.log(response);
    }

    render() {
        return (<GoogleLogin
            clientId="381930517371-emjlrrknknbbj3u0jm50h24l9tdjkipj.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />);
    }
}