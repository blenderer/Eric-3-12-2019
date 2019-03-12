import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

class Upload extends Component {
  static propTypes = {
    fileReady: PropTypes.bool.isRequired,
    fileInputRef: PropTypes.object.isRequired,
    onUpload: PropTypes.func.isRequired,
    onFileChange: PropTypes.func.isRequired,
  };

  render() {
    const {
      fileReady,
      fileInputRef,
      onFileChange,
      onUpload
    } = this.props;

    return (
      <>
        <p>Please provide only png or jpg files under 10MB.</p>
        <input type="file" onChange={onFileChange} ref={fileInputRef} />
        <br /><br/>
        <Button
          variant="contained"
          color="primary"
          disabled={!fileReady}
          onClick={onUpload}
        >
          Upload
        </Button>
      </>
    );
  }
}

export default Upload;
