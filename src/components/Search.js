import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Search extends Component {
  static propTypes = {
    search: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
  };

  render() {
    const { search, onSearch, onClear } = this.props;

    return (
      <div>
        <TextField
          value={search}
          onChange={onSearch}
          placeholder="Search File(s)"
        />
        {search && <Button onClick={onClear}>Clear</Button>}
      </div>
    );
  }
}

export default Search;
