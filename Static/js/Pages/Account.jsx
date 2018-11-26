import React from "react";
import {Link} from "react-router-dom";

export default class Account extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ paddingTop: "90px" }}>
                Account page!
                <Link to="/new-post">
                    <button type="button">
                        Create New Post
                    </button>
                </Link>
            </div>
        );
    }
}