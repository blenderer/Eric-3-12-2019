import React, { Component } from "react";
import PropTypes from "prop-types";

import Upload from './components/Upload';
import Files from './components/Files';

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
    } = this.props;;

    return (
      <div>
        <Upload
          fileReady={fileReady}
          fileInputRef={fileInputRef}
          onUpload={onUpload}
          onFileChange={onFileChange}
        />
        <br/><br/>
        <Files
          files={files}
          search={search}
          onSearch={onSearch}
          onClear={onClear}
          onDelete={onDelete}
        />
      </div>
    );
  }
}

export default AppInterface;
