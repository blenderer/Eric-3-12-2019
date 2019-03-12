import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class App extends Component {
  upload = () => {
    fetch("/upload", {
      method: "POST",
      body: this.state.uploading,
    })
      // .then(
      //   response => response.json()
      // )
      .then(
        success => console.log(success)
      )
      .catch(
        error => console.log(error)
      );
  }

  onFileChange = (e) => {
    this.setState({
      uploading: e.target.files[0], // TODO: add file [0] check
    });
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.onFileChange} />
        <br />
        <Button onClick={this.upload}>Upload</Button>
      </div>
    );
  }
}

export default App;
