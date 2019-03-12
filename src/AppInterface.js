import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class AppInterface extends Component {
  static propTypes = {
    fileReady: PropTypes.bool.isRequired,
    files: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    fileInputRef: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onUpload: PropTypes.func.isRequired,
    onFileChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const {
      fileReady,
      files,
      fileInputRef,
      search,
      onSearch,
      onClear,
      onUpload,
      onFileChange,
      onDelete
    } = this.props;

    const totalFileSize = files
      .map(file => file.size)
      .reduce((totalSize, currentFileSize) => {
        return totalSize + currentFileSize;
      }, 0);

    return (
      <div>
        <p>Please provide only png or jpg files.</p>
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
        <br/><br/>
        <div>
          <TextField
            value={search}
            onChange={onSearch}
            placeholder="Search File(s)"
          />
          {search && <Button onClick={onClear}>Clear</Button>}
        </div>
        <div>
          <p>
            {files.length} Documents
          </p>
          <p>
            Total File Size: {totalFileSize / 1000} KB
          </p>
        </div>
        <div>
          {files.map(file => (
            <div key={file.id}>
              <p>{file.name}</p>
              <p>{file.size / 1000} KB</p>
              <Button onClick={() => onDelete(file.id)}>Delete</Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AppInterface;
