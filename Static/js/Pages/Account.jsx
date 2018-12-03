import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

export default class Account extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            accountInfo: null,
            loading: true,
            editing: false,
            viewingOwnAccount: props.user.id === props.userToView
        }

        this.handleBioChange = this.handleBioChange.bind(this);
        this.handleVehicleChange = this.handleVehicleChange.bind(this);
        this.save = this.save.bind(this);
    }

    componentDidMount() {
        this.getUserInfo(this.props.userToView);
    }

    componentDidUpdate(prevProps) {
        if (this.props.userToView != prevProps.userToView) {
            this.getUserInfo(this.props.userToView);
            this.setState({
                viewingOwnAccount: this.props.user.id === this.props.userToView
            });
        }
    }

    save() {
        this.setState({ loading: true });
        axios.post("/UpdateUserInfo/", this.state.accountInfo)
            .then(response => {
                this.setState({
                    accountInfo: response.data,
                    loading: false
                });
            }).catch(error => {
                this.setState({ loading: false });
                alert("Could not update data");
                console.log(error);
            })
    }

    getUserInfo(userToView) {
        axios.post("/GetUserInfo/", { id: userToView })
            .then(response => {
                this.setState({
                    accountInfo: response.data,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    }

    handleVehicleChange(event) {
        let newInfo = this.state.accountInfo;
        newInfo.vehicle = event.target.value;;
        this.setState({accountInfo: newInfo});
    }

    handleBioChange(event) {
        let newInfo = this.state.accountInfo;
        newInfo.bio = event.target.value;;
        this.setState({accountInfo: newInfo});
    }

    renderEditButtons(field) {
        if (!this.state.viewingOwnAccount) return null;
        return (
            <div>
                <button className="user-buttons" style={{marginRight: "225px"}} type="button" onClick={() => this.setState({ editing: true })}> Edit {field} </button>
                <button className="user-buttons" type="button" onClick={this.save}> Save {field} </button>
            </div>
        );
    }

    render() {
        if (this.state.loading) {
            return <img src="../dist/css/img/wheel-loader.gif" />;
        }
        return (
            <div style={{ paddingTop: "120px" }}>
            <div className="circle">
                <div className="square">
                    <h2 className="Account-Name"> {this.state.accountInfo.name} </h2>
                </div>
                </div>
                <Link to="/new-post">
                    <button type="button" className="button-make-new-post">
                        Post New Route
                    </button>
                </Link>
                <hr className="hr-style"></hr>
                <h5 className= "stuff"  style={{marginTop: "30px"}}> My car </h5>
                <TextField
                    class="bio"
                    style={{marginTop: "-10px", marginBottom: "20px"}}
                    type="text"
                    fullWidth
                    InputProps={{ readOnly: !this.state.editing }}
                    label="Title" 
                    onChange={this.handleVehicleChange}
                    value={this.state.accountInfo.vehicle} />
                {this.renderEditButtons("car")}
                <h5 className= "stuff"> Bio </h5>
                <TextField
                    class="bio"
                    style={{marginTop: "-10px", marginBottom: "20px"}}
                    multiline
                    fullWidth
                    InputProps={{ readOnly: !this.state.editing }}
                    label="Description"
                    onChange={this.handleBioChange}
                    value={this.state.accountInfo.bio} />
                {this.renderEditButtons("bio")}
                <hr className="hr-style" style={{marginTop: "100px"}}></hr>
            </div>

        );
    }
}