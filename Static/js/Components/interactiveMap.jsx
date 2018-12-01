import React from "react";

export default class InteractiveMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initializing: true
        }

        this.map = null;
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.initializeMap(pos.coords.latitude, pos.coords.longitude)
            }, err => this.initializeMap());
        } else {
            this.initializeMap()
        }
    }

    initializeMap(latitude = 41.1537, longitude = -81.3579) {
        this.setState({initializing: false});

        const coordinates = new window.google.maps.LatLng(latitude, longitude);
        const mapOptions = {
            zoom: 13,
            center: coordinates
        };

        this.map = new window.google.maps.Map(document.getElementById("interactive-map"), mapOptions);
    }

    componentDidUpdate() {
        if (this.props.newLocation) {
            this.plotAddress(this.props.newLocation);
        }
    }

    plotAddress(address) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status == 'OK') {
                const latLng = {lat: results[0].geometry.location.lat (), lng: results[0].geometry.location.lng ()};
                const marker = new window.google.maps.Marker({
                    position: latLng,
                    map: this.map
                });
                this.props.onNewLocationSuccess();
            } else {
                this.props.onNewLocationFailure();
            }
        });
    }

    render() {
        if (this.state.initializing) {
            return <img src="../dist/css/img/wheel-loader.gif"/>
        }
        return (
            <div style={{ width: "100%", paddingTop: "100%" }} id="interactive-map" />
        );
    }
}