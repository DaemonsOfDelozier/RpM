import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WaypointAdder from "../Components/waypointAdder";

export default class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            success: false,
            locations: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({loading: true});

        axios.post("/SubmitPost/", data)
            .then(() => {
                this.setState({success: true});
            }).catch(() => {
                this.setState({loading: false});
                alert("Post could not be submitted");
            });
    }

    renderForm() {
        if (!this.props.user) {
            return (
                <h4>Please log in to submit a post</h4>
            );
        } else {
            return (
                <div className="form">
                    <h2 style={{textAlign: "left"}}>Submit a Route</h2>
                    <form className="submit-form" onSubmit={this.handleSubmit}>

                        <TextField type="text" fullWidth label="Title"/>
                        <TextField multiline fullWidth label="Description"/>
                        <WaypointAdder />
                        <TextField type="text" fullWidth label="Notes"/>

                        <Button variant="contained" color="primary" style={{float: "left", marginTop: "15px"}}>Submit</Button>
                    </form>
                </div>
            );
        }
    }

    render() {
        if (this.state.success) {
            return <Redirect to="/explore" />;
        }
        if (this.state.loading) {
            return <img src="../dist/css/img/wheel-loader.gif"/>
        }

        return (
            <div style={{paddingTop: "100px", textAlign: "center"}}>
                {this.renderForm()}
            </div>
        );
    }
}