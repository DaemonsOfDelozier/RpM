import React from "react";
import Grid from "@material-ui/core/Grid"
import Map from "./map.jsx";
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom";
const metersPerMile = 1609.344;

export default class RoutePost extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: props.post.post,
            poster: props.post.poster,
            distance: null,
            duration: null,
            startingLocation: null
        }

        this.onResponse = this.onResponse.bind(this);
    }

    renderDistaceDuration() {
        if (!this.state.distance || !this.state.duration) return null;
        return (
            <p className="emphasized" style={{ marginBottom: "0px" }}>{this.state.distance} - {this.state.duration}</p>
        );
    }

    renderDirections() {
        const post = this.state.post;
        let locations = post.waypoints.map(waypoint => waypoint.location);
        locations.unshift(post.start)
        locations.push(post.end)

        return (
            <div>
                {locations.map((location, index) => <li key={index}>{location}</li>)}
            </div>
        );
    }

    renderUserLocationRating(post, poster) {
        return (
            <Grid item sm={12}
                container direction="row" justify="space-between" alignItems="flex-start">

                <Grid item md={12} lg={6} container direction="row" justify="space-between" alignItems="flex-start">
                    <Grid item sm={6}>
                        <Link to={`/account/${poster.id}`}><h5>{poster.name}</h5></Link>
                    </Grid>
                    <Grid item sm={6}>
                        <h5 style={{ float: "right" }}>{this.state.startingLocation}</h5>
                    </Grid>
                </Grid>
                <Grid item md={12} lg={6} style={{ width: "100%" }}>
                    <StarRatingComponent name={post.id + "_rating"}
                        starCount={5}
                        value={post.rating}
                        editing={false} />
                </Grid>

            </Grid>
        );
    }

    getStartCity(startGeocode) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'placeId': startGeocode }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    const addressComponents = results[0].address_components;
                    const city = addressComponents.find((component) => component.types[0] === "locality").long_name;
                    const state = addressComponents.find((component) => component.types[0] === "administrative_area_level_1").long_name;
                    this.setState({
                        startingLocation: `${city}, ${state}`
                    }); 
                }
            }
        });
    }

    onResponse(response) {
        const legs = response.routes[0].legs;

        const meters = legs.reduce((acc, current) => acc + current.distance.value, 0);
        const miles = Math.round(meters / metersPerMile);

        const seconds = legs.reduce((acc, current) => acc + current.duration.value, 0);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.round((seconds - (hours * 3600)) / 60)

        this.setState({
            distance: `${miles} miles`,
            duration: `${hours} hours, ${minutes} minutes`
        });

        this.getStartCity(response.geocoded_waypoints[0].place_id);
    }

    render() {
        const post = this.state.post;
        const poster = this.state.poster;
        return (
            <div style={{ padding: "20px" }}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    {this.renderUserLocationRating(post, poster)}
                    <Grid item md={12} lg={6} style={{ width: "100%" }}>
                        <Map id={post.id}
                            start={post.start}
                            end={post.end}
                            waypoints={post.waypoints}
                            onResponse={this.onResponse} />
                    </Grid>
                    <Grid item zeroMinWidth md={12} lg={6}>
                        <div className="route-info">
                            <h4 className="emphasized">{post.title}</h4>
                            <p>{post.description}</p>
                            <br />
                            <h4 className="emphasized">Route</h4>
                            {this.renderDistaceDuration()}
                            {this.renderDirections()}
                            <br />
                            <h4 className="emphasized">Notes</h4>
                            <p>{post.notes}</p>
                        </div>

                    </Grid>
                </Grid>
            </div>
        );
    }
}