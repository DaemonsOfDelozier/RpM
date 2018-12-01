import React from "react";
import InteractiveMap from "./interactiveMap";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

export default class WaypointAdder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: [],
            newLocation: ""
        }

        this.handleNewLocation = this.handleNewLocation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleNewLocation() {
        this.setState(state => {
            state.locations.push(state.newLocation);
            return { locations: [...state.locations] };
        });
    }

    handleInputChange(event) {
        this.setState({
            newLocation: event.target.value
        });
    }

    render() {
        return (
            <div style={{paddingTop: 20}}>
                <Grid container>
                    <Grid item md={12} lg={6} style={{ width: "100%" }}>
                        <InteractiveMap locations={this.state.locations} />
                    </Grid>
                    <Grid item md={12} lg={6} style={{ paddingLeft: "20px" }}>
                        <Grid container>
                            <Grid item sm={11}>
                                <TextField fullWidth type="text" label="Start"
                                    onChange={this.handleInputChange} value={this.state.newLocation} />
                            </Grid>
                            <Grid item sm={1}>
                                <IconButton onClick={this.handleNewLocation}><AddIcon /></IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}