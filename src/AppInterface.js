import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Search from "./components/Search";
import Upload from "./components/Upload";
import Files from "./components/Files";

class AppInterface extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
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
          <Search search={search} onSearch={onSearch} onClear={onClear} />
          <Upload
            fileInputRef={fileInputRef}
            onUpload={onUpload}
            onFileChange={onFileChange}
          />
        </div>
        <Files files={files} onDelete={onDelete} />
      </div>
    );
  }
}

const styles = {
  layout: {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    padding: 15,
    maxWidth: 960,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 115
  },
  "@media screen and (max-width: 449px)": {
    header: {
      flexDirection: "column-reverse"
    }
  }
};

export default withStyles(styles)(AppInterface);
