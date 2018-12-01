import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button';

export default class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartKeyUp = this.handleStartKeyUp.bind(this);
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

    renderMap() {
        return null;
    }

    handleStartKeyUp(event) {
        if (event.key === "Enter") {
            console.log(event.target.value);
        }
    }

    renderForm() {
        if (!this.props.user) {
            return (
                <h4>Please log in to submit a post</h4>
            );
        } else {
            return (
                <div className="form">
                    <h2>Submit a Route</h2>
                    <form className="submit-form" onSubmit={this.handleSubmit}>

                        <TextField type="text" fullWidth label="Title"/>
                        <TextField multiline fullWidth label="Description"/>

                        <Grid container>
                            <Grid item>
                                {this.renderMap()}
                            </Grid>
                            <Grid item>
                                <TextField type="text" label="Start" onKeyUp={this.handleStartKeyUp}/>
                            </Grid>
                        </Grid>
                        

                        <TextField type="text" fullWidth label="Notes"/>

                        <Button variant={"contained"} color={"primary"} style={{float: "left", marginTop: "15px"}}>Submit</Button>
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