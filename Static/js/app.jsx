import React from "react";
import Map from "./map.jsx";
import Header from "./header.jsx"

export default class App extends React.Component {
  render () {
    return (
        <div class="main-wrap">
            <div class="second-wrap">
                <Header></Header>
                <Map></Map>
            </div>
        </div>
    );
  }
}