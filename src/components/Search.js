import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Search extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  };

  render() {
    const { search, onSearch, onClear, classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          value={search}
          onChange={onSearch}
          placeholder="Search File(s)"
          variant="outlined"
        />
        {search && <Button onClick={onClear}>Clear</Button>}
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default withStyles(styles)(Search);
