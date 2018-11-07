import React from "react";
import Map from "./map.jsx";
import axios from "axios";

export default class PostList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            loading: true
        }
    }

    componentDidMount() {
        axios.get("/GetAllPosts")
            .then((response) => {
                this.setState({
                    posts: response.data,
                    loading: false
                });
            }).catch(error => {
                alert("Could not get posts");
                console.log(error);
            });
    }

    renderPosts() {
        return (
            this.state.posts.map(post => {
                return (
                    <div key={post.id} style={{paddingLeft: "20px", paddingTop: "20px"}}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>{post.notes}</p>
                        <Map id={post.id} start={post.start} end={post.end}/>
                    </div>
                );
            })
        );
    }

    render() {
        if (this.state.loading) return null;
        return (
            <div style={{marginTop: "90px"}}>
                { this.renderPosts() }
            </div>
        );
    }
}