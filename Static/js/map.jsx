import React from "react";

export default class Map extends React.Component {


    render() {
        return (
            <div>
                <div id="floating-panel">
                    <b>Start: </b>
                    <select id="start">
                        <option value="Kent, OH">Kent</option>
                        <option value="Brimfield, OH">Brimfield</option>
                        <option value="Cleveland, OH">Cleveland</option>
                    </select>
                    <b>End: </b>
                    <select id="end">
                        <option value="Akron, OH">Akron</option>
                        <option value="Columbus, OH">Columbus</option>
                        <option value="Dayton, OH">Dayton</option>
                    </select>
                </div>
                <div id="map"></div>
                <div id="warnings-panel"></div>
            </div>
        );
    }
}