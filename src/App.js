import React, { Component } from "react";
import { getFiles, uploadFile } from './fetches';

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

class App extends Component {
  state = {
    uploading: null,
    files: [],
    search: '',
  };

  fileInput = React.createRef();

  async componentDidMount() {
    const files = await getFiles();
    this.setState({
      files: files,
    });
  }

  upload = async () => {
    const files = await uploadFile(this.state.uploading);

    this.setState({
      uploading: null,
      files: files,
    });
    
    this.fileInput.current.value = null;
  };

  onFileChange = e => {
    this.setState({
      uploading: e.target.files[0] // TODO: add file [0] check
    });
  };

  onSearch = async e => {
    const searchText = e.target.value;

    this.setState({search: searchText});
    
    if (!searchText) {
      const files = await getFiles();
      return this.setState({
        files: files,
      });
    };

    const files = await getFiles(searchText);
    this.setState({
      files: files,
    });
  }

  clearSearch = async () => {
    const files = await getFiles();
    this.setState({
      search: '',
      files,
    });
  }

  render() {
    const { files, search } = this.state;

    return (
      <div>
        <input type="file" onChange={this.onFileChange} ref={this.fileInput} />
        <br />
        <Button onClick={this.upload}>Upload</Button>
        <div>
          <TextField
            value={search}
            onChange={this.onSearch}
            placeholder="Search File(s)"
          />
          {search && <Button onClick={this.clearSearch}>
            Clear
          </Button>}
        </div>
        <div>
          {files.map(file => (
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
