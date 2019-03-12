import React, { Component } from "react";
import { getFiles, uploadFile, deleteFile } from "./fetches";

import AppInterface from "./AppInterface";

class App extends Component {
  state = {
    uploading: null,
    files: [],
    search: ""
  };

  fileInput = React.createRef();

  async componentDidMount() {
    const files = await getFiles();
    this.setState({
      files: files
    });
  }

  upload = async () => {
    const files = await uploadFile(this.state.uploading);

    this.setState({
      uploading: null,
      files: files
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

    this.setState({ search: searchText });

    if (!searchText) {
      const files = await getFiles();
      return this.setState({
        files: files
      });
    }

    const files = await getFiles(searchText);
    this.setState({
      files: files
    });
  };

  clearSearch = async () => {
    const files = await getFiles();
    this.setState({
      search: "",
      files
    });
  };

  delete = async fileId => {
    const files = await deleteFile(fileId);
    this.setState({
      files
    });
  };

  render() {
    const { files, search } = this.state;

    return (
      <AppInterface
        files={files}
        search={search}
        fileInputRef={this.fileInput}
        onSearch={this.onSearch}
        onClear={this.clearSearch}
        onUpload={this.upload}
        onFileChange={this.onFileChange}
        onDelete={this.delete}
      />
    );
  }
}

export default App;
