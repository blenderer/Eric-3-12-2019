import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import File from "./File";

class Files extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    files: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { files, onDelete, classes } = this.props;

    const totalFileSize = files
      .map(file => file.size)
      .reduce((totalSize, currentFileSize) => {
        return totalSize + currentFileSize;
      }, 0);

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <p className={classes.documentCount}>{files.length} Documents</p>
          <p>Total Size: {totalFileSize / 1000} KB</p>
        </div>
        <div className={classes.files}>
          {files.map(file => (
            <File
              key={file.id}
              name={file.name}
              size={file.size}
              id={file.id}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  '@media screen and (max-width: 449px)': {
    header: {
      flexDirection: 'column',
    }
  },
  documentCount: {
    fontSize: 29
  },
  files: {
    display: 'flex',
    flexDirection: 'column',
    margin: -10
  },
  '@media screen and (min-width: 450px)': {
    files: {
      flexDirection: 'row',
      flexFlow: 'wrap'
    }
  },
};

export default withStyles(styles)(Files);
