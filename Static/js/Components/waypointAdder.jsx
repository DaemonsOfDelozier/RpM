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
            newLocation: "",
            doneInputting: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onNewLocationSuccess = this.onNewLocationSuccess.bind(this);
        this.onNewLocationFailure = this.onNewLocationFailure.bind(this);
    }

    onNewLocationFailure() {
        console.log("fail");
        this.setState({ doneInputting: false });
    }

    onNewLocationSuccess() {
        console.log("success");
        this.setState(state => {
            state.locations.push(state.newLocation);
            return {
                locations: state.locations,
                newLocation: "",
                doneInputting: false
            };
        });
    }

    handleInputChange(event) {
        this.setState({
            newLocation: event.target.value
        });
    }

    renderLocations() {
        return this.state.locations.map((location, index) => {
            let label = index === 0 ? "start" : `waypoint ${index}`;
            return (
                <Grid container key={index}>
                    <Grid item sm={11}>
                        <TextField fullWidth 
                                   InputProps={{readOnly: true}} 
                                   label={label}
                                   value={location} />
                    </Grid>
                </Grid>
            );
        });
    }

    render() {
        let newLocationLabel = this.state.locations.length === 0 ? "Start" : "Next";
        return (
            <div style={{ paddingTop: 20 }}>
                <Grid container>
                    <Grid item md={12} lg={6} style={{ width: "100%" }}>
                        <InteractiveMap locations={this.state.locations}
                            newLocation={this.state.doneInputting ? this.state.newLocation : null}
                            onNewLocationSuccess={this.onNewLocationSuccess}
                            onNewLocationFailure={this.onNewLocationFailure} />
                    </Grid>
                    <Grid item md={12} lg={6} style={{ paddingLeft: "20px" }}>
                        {this.renderLocations()}
                        <Grid container>
                            <Grid item sm={11}>
                                <TextField fullWidth type="text" label={newLocationLabel}
                                    onChange={this.handleInputChange} value={this.state.newLocation} />
                            </Grid>
                            <Grid item sm={1}>
                                <IconButton onClick={() => this.setState({ doneInputting: true })}><AddIcon /></IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}