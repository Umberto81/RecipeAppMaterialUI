import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Form from "./form";
import SimpleAppBar from "./appbar";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <SimpleAppBar />
        </Grid>
        <Grid item xs={4} />

        <Grid item xs={4} />
        <Grid item xs={4}>
          <Form theme={props.theme} />
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
