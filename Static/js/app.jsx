import React from "react";
import Map from "./map.jsx";
import Header from "./header.jsx"

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header user={this.props.user}></Header>
                <div className="main-wrap">
                    <div className="second-wrap">
                        <Map user={this.props.user}></Map>
                    </div>
                </div>
            </div>
        );
    }
}