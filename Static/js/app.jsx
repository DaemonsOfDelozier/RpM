import React from "react";
import Header from "./header.jsx"
import PostList from "./postList.jsx"

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header user={this.props.user}></Header>
                <div className="main-wrap">
                    <PostList user={this.props.user}/>
                </div>
            </div>
        );
    }
}