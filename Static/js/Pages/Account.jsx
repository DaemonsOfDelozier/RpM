import React from "react";
import {Link} from "react-router-dom";

export default class Account extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.user);
    }

    render() {
        return (
            <div style={{ paddingTop: "120px" }}>
                <h2 class="Account-Name"> 
                    {this.props.user.name}
                </h2>

                <Link to="/new-post">
                    <button type="button" class="button-make-new-post">
                        Post New Route
                    </button>
                </Link>
                <hr class="hr-style"></hr>
            </div>
        );
    }
}