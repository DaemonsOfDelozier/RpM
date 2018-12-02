import React from "react";

export default class InteractiveMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initializing: true
        }

        this.map = null;
        this.markers = [];
        this.bounds = new window.google.maps.LatLngBounds();
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
        this.setState({ initializing: false });

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
        if (this.props.finished) {
            this.createRoute();
        }
    }

    createRoute() {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer()
        directionsRenderer.setMap(this.map);

        let locations = [...this.props.locations];
        const request = {
            origin: locations.shift(),
            destination: locations.pop(),
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: locations.map(loc => {
                return { location: loc, stopover: true }
            }),
            optimizeWaypoints: false
        };

        directionsService.route(request, (response, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
                this.markers.forEach(marker => marker.setMap(null)); //Clear existing markers
                this.props.onRouteResponse(request);
                directionsRenderer.setDirections(response);
            } else {
                alert("Directions request failed: " + status);
            }
        });
    }

    plotAddress(address) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status == 'OK') {
                const latLng = { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() };
                const markerLabel = (this.props.locations.length + 1).toString();
                const marker = new window.google.maps.Marker({
                    position: latLng,
                    map: this.map,
                    label: { text: markerLabel }
                });

                this.markers.push(marker);
                this.resizeMap(latLng);
                this.props.onNewLocationSuccess(results[0].formatted_address);
            } else {
                this.props.onNewLocationFailure();
            }
        });
    }

    resizeMap(latLng) {
        this.bounds.extend(latLng);
        this.map.setCenter(this.bounds.getCenter());
        this.map.fitBounds(this.bounds);
        this.map.setZoom(this.map.getZoom() - 1);
        if (this.map.getZoom() > 14) {
            this.map.setZoom(14);
        }
    }

    render() {
        if (this.state.initializing) {
            return <img src="../dist/css/img/wheel-loader.gif" />
        }
        return (
            <div style={{ width: "100%", paddingTop: "100%" }} id="interactive-map" />
        );
    }
}