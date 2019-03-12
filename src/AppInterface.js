import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class AppInterface extends Component {
  static propTypes = {
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
      files,
      fileInputRef,
      search,
      onSearch,
      onClear,
      onUpload,
      onFileChange,
      onDelete
    } = this.props;

    return (
      <div>
        <input type="file" onChange={onFileChange} ref={fileInputRef} />
        <br />
        <Button onClick={onUpload}>Upload</Button>
        <div>
          <TextField
            value={search}
            onChange={onSearch}
            placeholder="Search File(s)"
          />
          {search && <Button onClick={onClear}>Clear</Button>}
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
