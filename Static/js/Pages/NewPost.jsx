import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

export default class NewPost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            success: false
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
                    <h2>Submit a Route</h2>
                    <form className="submit-form" onSubmit={this.handleSubmit}>
                        <h4>Title:</h4>
                        <input type="text" placeholder="title" name="title"/>

                        <h4>Description:</h4>
                        <textarea rows="4" cols="50" name="description">
                        </textarea>

                        <h4>Notes:</h4>
                        <textarea rows="4" cols="50" name="notes">
                        </textarea>

                        <h4>Rating:</h4>
                        <select name="rating">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="4">Five</option>
                        </select>

                        <h4>Starting Point:</h4>
                        <input type="text" placeholder="start" name="start"/>

                        <h4>Waypoints:</h4>
                        <p>e.g. 123 Street_Address, OH 12345 > 456 Street_Address, OH 67890 ...</p>
                        <textarea rows="4" cols="50" name="waypoints"/>

                        <h4>End:</h4>
                        <input type="text" placeholder="end" name="end"/>

                        <input className="submit-button" type="submit"/>
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
            <div style={{paddingTop: "100px"}}>
                {this.renderForm()}
            </div>
        );
    }
}