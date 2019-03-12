import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    uploading: null,
    files: [],
  };

  fileInput = React.createRef();

  upload = () => {
    const data = new FormData();
    data.append('file', this.state.uploading);
    fetch("/upload", {
      method: "POST",
      body: data,
    })
      .then(
        response => response.json()
      )
      .then(json => {
        this.setState({
          uploading: null,
          files: json.files,
        });
        
        this.fileInput.value = null;
      })
      .catch(error => console.log(error));
  };

  onFileChange = e => {
    this.setState({
      uploading: e.target.files[0] // TODO: add file [0] check
    });
  };

  render() {
    const { files, uploading } = this.state;

    return (
      <div>
        <input type="file" onChange={this.onFileChange} ref={this.fileInput} />
        <br />
        <Button onClick={this.upload}>Upload</Button>
        <div>
          {this.state.files.map(file => (
            <div key={file.id}>
              <p>{file.name}</p>
              <p>{file.size / 1000} KB</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
