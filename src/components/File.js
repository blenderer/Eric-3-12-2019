import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

class File extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() {
    const { classes, id, name, size, onDelete } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <p className={classes.name}>{name}</p>
          <div className={classes.actions}>
            <div>{size / 1000} KB</div>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    flex: "1 1 auto",
    minWidth: "100%",
    maxWidth: "100%",
    padding: 10
  },
  "@media screen and (min-width: 450px)": {
    root: {
      minWidth: "50%",
      maxWidth: "50%"
    }
  },
  "@media screen and (min-width: 700px)": {
    root: {
      minWidth: "33%",
      maxWidth: "33%"
    }
  },
  content: {
    border: "1px solid black",
    padding: 3
  },
  name: {
    height: 99,
    fontSize: 25
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

export default withStyles(styles)(File);
