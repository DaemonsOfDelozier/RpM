import React from "react";
import Header from "./header.jsx"
import PostList from "./postList.jsx"

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-wrap">
                <div className="second-wrap">
                    <Header user={this.props.user}></Header>
                    <PostList user={this.props.user}/>
                </div>
            </div>
        );
    }
}