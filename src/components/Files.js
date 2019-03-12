import React, { Component } from "react";
import PropTypes from "prop-types";

import File from './File';

class Files extends Component {
  static propTypes = {
    files: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const {
      files,
      search,
      onSearch,
      onClear,
      onDelete
    } = this.props;

    const totalFileSize = files
      .map(file => file.size)
      .reduce((totalSize, currentFileSize) => {
        return totalSize + currentFileSize;
      }, 0);

    return (
      <>
        
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
            <File
              key={file.id}
              name={file.name}
              size={file.size}
              id={file.id}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Files;
