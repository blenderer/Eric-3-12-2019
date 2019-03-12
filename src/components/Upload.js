import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

class Upload extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fileInputRef: PropTypes.object.isRequired,
    onFileChange: PropTypes.func.isRequired
  };

  render() {
    const { classes, fileInputRef, onFileChange } = this.props;

    return (
      <div className={classes.root}>
        <input
          className={classes.input}
          id="upload"
          type="file"
          onChange={onFileChange}
          ref={fileInputRef}
        />
        <label className={classes.label} htmlFor="upload">
          <Button
            size="large"
            color="primary"
            variant="contained"
            component="span"
            fullWidth
          >
            Upload (10MB max, png/jpg)
          </Button>
        </label>
      </div>
    );
  }
}

const styles = {
  input: {
    display: "none"
  },
  '@media screen and (max-width: 449px)': {
    root: {
      width: '100%'
    },
    label: {
      width: '100%'
    }
  }
};

export default withStyles(styles)(Upload);
