import React from "react";
import Map from "../Components/map.jsx";
import axios from "axios";
import Grid from "@material-ui/core/Grid"

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

    renderPosts() {
        return (
            this.state.posts.map(post => {
                return (
                    <div key={post.id} style={{padding: "20px"}}>
                        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={24}>
                            <Grid item md={12} lg={6}>
                                <h3 className="emphasized">{post.title}</h3>
                                <Map id={post.id} start={post.start} end={post.end} waypoints={post.waypoints}/>
                            </Grid>
                            <Grid item zeroMinWidth md={12} lg={6} style={{paddingTop: "40px"}}>
                                <h4 className="emphasized">Description</h4>
                                <p>{post.description}</p>
                                <br/>
                                <h4 className="emphasized">Notes</h4>
                                <p>{post.notes}</p>
                            </Grid>
                        </Grid>
                    </div>
                );
            })
        );
    }

    render() {
        if (this.state.loading) return null;
        return (
            <div style={{paddingTop: "90px"}}>
                { this.renderPosts() }
            </div>
        );
    }
}