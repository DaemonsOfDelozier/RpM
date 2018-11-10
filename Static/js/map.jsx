import React from "react";

export default class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const latitude = 41.1537;
        const longitude = 81.3579;

        const coordinates = new window.google.maps.LatLng(latitude, longitude);

        const mapOptions = {
            zoom: 13,
            center: coordinates
        };

        this.directionsService = new window.google.maps.DirectionsService();
        this.directionsRenderer = new window.google.maps.DirectionsRenderer();

        const map = new window.google.maps.Map(document.getElementById(this.props.id), mapOptions);
        this.directionsRenderer.setMap(map);

        var request = {
            origin: this.props.start,
            destination: this.props.end,
            travelMode: google.maps.TravelMode.DRIVING
        };

        this.directionsService.route(request, (response, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                this.directionsRenderer.setDirections(response);
            } else { 
                alert("Directions request failed: " + status); 
            }
        });
    }

    render() {
        return (
            <div style={{ width: "100%", paddingTop: "100%" }} id={this.props.id} />
        );
    }
}