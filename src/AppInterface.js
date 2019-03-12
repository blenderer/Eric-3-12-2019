import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

import Search from "./components/Search";
import Upload from "./components/Upload";
import Files from "./components/Files";

class AppInterface extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
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
      classes,
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

    return (
      <div className={classes.layout}>
        <div className={classes.header}>
          <Search
            search={search}
            onSearch={onSearch}
            onClear={onClear}
          />
          <Upload
            fileReady={fileReady}
            fileInputRef={fileInputRef}
            onUpload={onUpload}
            onFileChange={onFileChange}
          />
        </div>

        <br />
        <br />
        <Files
          files={files}
          onDelete={onDelete}
        />
      </div>
    );
  }
}

const styles = {
  layout: {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
  }
};

export default withStyles(styles)(AppInterface);
