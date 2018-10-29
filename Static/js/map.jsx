import React from "react";

export default class Map extends React.Component {


    render() {
        return (
            <div id="map-area">

                <div id="map-canvas0"></div>
                <div id="map-canvas1"></div>
                <div id="map-canvas2"></div>
                <div id="map-canvas3"></div>
                <div id="warnings-panel"></div>
            </div>
        );
    }
}