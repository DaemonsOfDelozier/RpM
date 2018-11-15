import React from "react";
import Grid from "@material-ui/core/Grid"
import Map from "../Components/map.jsx";

export default class Post extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    renderDirections() {
        const post = this.props.post;
        let locations = post.waypoints.map(waypoint => waypoint.location);
        locations.unshift(post.start)
        locations.push(post.end)

        return (
            <div>
                {locations.map((location, index) => <li key={index}>{location}</li>)}
            </div>
        );
    }

    render() {
        const post = this.props.post;
        return (
            <div style={{ padding: "20px" }}>
                <h3 className="emphasized">{post.title}</h3>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={24}>
                    <Grid item md={12} lg={6}>
                        <h5>{post.start}</h5>
                        <Map id={post.id} start={post.start} end={post.end} waypoints={post.waypoints} />
                    </Grid>
                    <Grid item zeroMinWidth md={12} lg={6} style={{ paddingTop: "40px" }}>
                        <h4 className="emphasized">Description</h4>
                        <p>{post.description}</p>
                        <br />
                        <h4 className="emphasized">Directions</h4>
                        {this.renderDirections()}
                        <br />
                        <h4 className="emphasized">Notes</h4>
                        <p>{post.notes}</p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}