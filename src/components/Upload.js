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
      <div>
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
  }
};

export default withStyles(styles)(Upload);
