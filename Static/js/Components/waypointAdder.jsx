import React from "react";
import InteractiveMap from "./interactiveMap";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

export default class WaypointAdder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            locations: [],
            newLocation: "",
            doneTyping: false,
            finished: false
        }

        this.post = {};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onNewLocationSuccess = this.onNewLocationSuccess.bind(this);
        this.onNewLocationFailure = this.onNewLocationFailure.bind(this);
    }

    onNewLocationFailure() {
        this.setState({ 
            doneTyping: false, 
            newLocationError: true 
        });
    }

    onNewLocationSuccess(completeAddress) {
        this.setState(state => {
            state.locations.push(completeAddress);
            return {
                locations: state.locations,
                newLocation: "",
                doneTyping: false,
                newLocationError: false
            };
        });
    }

    handleInputChange(event) {
        this.setState({
            newLocation: event.target.value
        });
    }

    renderNewLocationInput(numLocations) {
        if (this.state.finished) return null;

        let newLocationLabel = numLocations === 0 ? "Start" : "Next";
        return (
            <Grid item container>
                <Grid item sm={11}>
                    <TextField fullWidth 
                               error={this.state.newLocationError}
                               type="text" 
                               label={newLocationLabel}
                               onChange={this.handleInputChange} 
                               value={this.state.newLocation} />
                </Grid>
                <Grid item sm={1}>
                    <IconButton onClick={() => this.setState({ doneTyping: true })}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </Grid>
        );
    }

    renderLocations() {
        return this.state.locations.map((location, index, array) => {

            let label;
            if (this.state.finished && index === array.length - 1) {
                label = "end";
            } else {
                label = index === 0 ? "start" : `waypoint ${index}`;
            }

            return (
                <Grid item container key={index}>
                    <Grid item sm={11}>
                        <TextField fullWidth
                            InputProps={{ readOnly: true }}
                            label={label}
                            value={location} />
                    </Grid>
                </Grid>
            );
        });
    }

    renderFinishButton(numLocations) {
        if (this.state.finished) return null;

        return (
            <Grid item>
                <Button style={{float: "left", marginTop: "10px"}}
                    variant="contained"
                    color="secondary"
                    disabled={numLocations < 2}
                    onClick={() => this.setState({ finished: true })}
                >Finish Route</Button>
            </Grid>
        );
    }

    render() {
        let numLocations = this.state.locations.length;
        let justify = this.state.finished ? "space-around" : "flex-start";
        return (
            <div style={{ paddingTop: 20 }}>
                <Grid container>
                    <Grid item md={12} lg={6} style={{ width: "100%" }}>
                        <InteractiveMap locations={this.state.locations}
                            newLocation={this.state.doneTyping ? this.state.newLocation : null}
                            onNewLocationSuccess={this.onNewLocationSuccess}
                            onNewLocationFailure={this.onNewLocationFailure}
                            onRouteResponse={this.props.onRouteResponse} 
                            finished={this.state.finished}/>
                    </Grid>
                    <Grid container direction="column" justify={justify} item md={12} lg={6} style={{ paddingLeft: "20px" }}>
                        {this.renderLocations()}
                        {this.renderNewLocationInput(numLocations)}
                        {this.renderFinishButton(numLocations)}
                    </Grid>
                </Grid>
            </div>
        );
    }
}