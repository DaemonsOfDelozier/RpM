import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import TextField from '@material-ui/core/TextField';

export default class Account extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            accountInfo: null,
            loading: true
        }
    }

    componentDidMount() {
        this.getUserInfo(this.props.userToView);
    }

    componentDidUpdate(prevProps) {
        if (this.props.userToView != prevProps.userToView) {
            this.getUserInfo(this.props.userToView);
        }
    }

    getUserInfo(userToView) {
        axios.post("/GetUserInfo/", {id: userToView})
            .then(response => {
                this.setState({
                    accountInfo: response.data,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        if (this.state.loading) {
            return <img src="../dist/css/img/wheel-loader.gif" />;
        }
        return (
            <div style={{ paddingTop: "120px" }}>
                <div className="triangle-right">
                    <h2 className="Account-Name"> 
                        {this.state.accountInfo.name}
                    </h2>
                </div>
                <Link to="/new-post">
                    <button type="button" className="button-make-new-post">
                        Post New Route
                    </button>
                </Link>
                <hr className="hr-style"></hr>
                <h5 style={{fontWeight: "bold", marginLeft: "40px" }}> My car </h5>
                <TextField class= "bio" type="text" fullWidth label="Title" inputRef={this.title} />
                <h5 style={{fontWeight: "bold", marginLeft: "40px" }}> Bio </h5>
                <TextField class= "bio" multiline fullWidth label="Description" inputRef={this.description} />
            </div>
            
        );
    }
}