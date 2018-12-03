import React from "react";
import axios from "axios";
import RoutePost from "../Components/route_post"

export default class Explore extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: null,
            loading: true
        }
    }

    componentDidMount() {
        axios.get("/GetAllPosts/")
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

    render() {
        if (this.state.loading) return null;
        return (
            <div className= "explore" style={{paddingTop: "90px"}}>
            <a href="https://www.instagram.com/routes_per_mile/"><img style={{float:"right"}} src="../dist/css/img/InstaLogo.png" height="42" width="42"/></a>
            <a href="https://twitter.com/RoutesPerMile"><img style={{float:"right"}} src="../dist/css/img/TwitterLogo.png" height="42" width="42"/></a>
                { this.state.posts.map(route => <RoutePost key={route.post.id} post={route} />) }
            </div>
        );
    }
}