import React from "react";
import Map from "./map.jsx";
import Header from "./header.jsx"

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-wrap">
                <div className="second-wrap">
                    <Header user={this.props.user}></Header>
                    <Map user={this.props.user}></Map>
                </div>
            </div>
        );
    }
}