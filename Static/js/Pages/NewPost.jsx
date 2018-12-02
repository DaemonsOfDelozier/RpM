import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button';
import WaypointAdder from "../Components/waypointAdder";
import StarRatingComponent from "react-star-rating-component";

export default class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            success: false,
            rating: 0
        }

        this.title = React.createRef();
        this.description = React.createRef();
        this.notes = React.createRef();
        this.route = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.onRouteResponse = this.onRouteResponse.bind(this);
    }

    handleSubmit() {
        this.setState({ loading: true });

        const post = {
            title: this.title.current.value,
            description: this.description.current.value,
            notes: this.notes.current.value,
            start: this.route.start,
            end: this.route.end,
            waypoints: this.route.waypoints,
            rating: this.state.rating
        }

        axios.post("/SubmitPost/", post)
            .then(() => {
                this.setState({ success: true });
            }).catch(() => {
                this.setState({ loading: false });
                alert("Post could not be submitted");
            });
    }

    onRouteResponse(request) {
        this.route.start = request.origin;
        this.route.end = request.destination;
        this.route.waypoints = request.waypoints;
    }

    handleRating(value) {
        this.setState({ rating: value });
    }

    renderForm() {
        if (!this.props.user) {
            return (
                <h4>Please log in to submit a post</h4>
            );
        } else {
            return (
                <div className="form">
                    <h2 style={{ textAlign: "left" }}>Submit a Route</h2>
                    <TextField type="text" fullWidth label="Title" inputRef={this.title} />
                    <TextField multiline fullWidth label="Description" inputRef={this.description} />
                    <WaypointAdder onRouteResponse={this.onRouteResponse} />
                    <TextField type="text" fullWidth label="Notes" inputRef={this.notes} />
                    <Grid container justify="space-between" style={{marginTop: "10px"}}>
                        <Grid item>
                            <p className="emphasized" style={{ display: "inline-block", float: "left", paddingRight: "5px" }}>Rating:</p>
                            <StarRatingComponent
                                className="floatLeft"
                                name={"rating"}
                                starCount={5}
                                value={this.state.rating}
                                onStarClick={this.handleRating}
                                editing={true} />
                        </Grid>
                        <Grid item>
                            <Button variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}>Submit</Button>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }

    render() {
        if (this.state.success) {
            return <Redirect to="/explore" />;
        }
        if (this.state.loading) {
            return <img src="../dist/css/img/wheel-loader.gif" />
        }

        return (
            <div style={{ paddingTop: "100px", textAlign: "center" }}>
                {this.renderForm()}
            </div>
        );
    }
}