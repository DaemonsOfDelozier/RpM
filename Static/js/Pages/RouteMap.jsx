import React from "react";

export default class RouteMap extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/SubmitPost/', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <div style={{paddingTop: "120px"}}>
                <div class="form">
                    <h2>Submit a Route</h2>
                    <p>Must be logged in to submit a post</p>
                    <form action="{{ url_for('SubmitPost') }}" method="post" class="submit-form" onSubmit={this.handleSubmit}>

                        <h4>Title:</h4>
                        <input type="text" placeholder="title" name="title"/>

                        <h4>Description</h4>
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

                        <input class="submit-button" type="submit"/>

                    </form>
                </div>
            </div>
        );
    }
}