import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

export default class WaypointAdder extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container>
                <Grid item sm={11}>
                    <TextField fullWidth type="text" label="Start"/>
                </Grid>
                <Grid item sm={1}>
                    <IconButton><AddIcon /></IconButton>
                </Grid>
            </Grid>
            
        );
    }
}