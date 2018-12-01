import React from "react";

export default class InteractiveMap extends React.Component {

    constructor(props) {
        super(props);

        this.defaultLatitude = 41.1537;
        this.defaultLongitude = 81.3579;
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.initializeMap(pos.coords.latitude, pos.coords.longitude)
            }, err => this.initializeMap(this.defaultLatitude, this.defaultLongitude));
        } else {
            this.initializeMap(this.defaultLatitude, this.defaultLongitude)
        }
    }

    initializeMap(latitude, longitude) {
        const coordinates = new window.google.maps.LatLng(latitude, longitude);
        const mapOptions = {
            zoom: 13,
            center: coordinates
        };

        const map = new window.google.maps.Map(document.getElementById("interactive-map"), mapOptions);
    }

    render() {
        return (
            <div style={{ width: "100%", paddingTop: "100%" }} id="interactive-map" />
        );
    }
}