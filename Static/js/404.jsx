import React from "react";

export default class NoMatch extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{paddingTop: "90px", fontSize: "2em"}}>
                Sorry, this isn't a valid url!
            </div>
        );
    }
}