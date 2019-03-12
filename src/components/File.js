import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

class File extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const {
      id,
      name,
      size,
      onDelete
    } = this.props;

    return (
      <div>
        <p>{name}</p>
        <p>{size / 1000} KB</p>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </div>
    );
  }
}

export default File;
