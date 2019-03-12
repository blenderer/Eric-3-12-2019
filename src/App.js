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
    try {
      const files = await getFiles();
      this.setState({
        files: files
      });
    } catch (e) {
      alert("error retrieving files! Please try again");
    }
  }

  upload = async () => {
    try {
      const files = await uploadFile(this.state.uploading);

      this.setState({
        uploading: null,
        files: files
      });

      this.fileInput.current.value = null;
    } catch (e) {
      alert(
        "Error uploading your file, please make sure you are supplying only a png or jpg!"
      );
    }
  };

  onFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      const tooBig = e.target.files[0].size / 1000000 > 10;

      if (tooBig) {
        this.fileInput.current.value = null;
        return alert('file is too large, please reduce file size under 10MB or try another');
      }

      this.setState({
        uploading: e.target.files[0], // TODO: add file [0] check
      });
    }
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

    try {
      const files = await getFiles(searchText);
      this.setState({
        files: files
      });
    } catch (e) {
      alert(
        "error retrieving files, please try again later or contact support"
      );
    }
  };

  clearSearch = async () => {
    const files = await getFiles();
    this.setState({
      search: "",
      files
    });
  };

  delete = async fileId => {
    try {
      const files = await deleteFile(fileId);
      this.setState({
        files
      });
    } catch (e) {
      alert(
        "error deleting files, please refresh and try again or contact support"
      );
    }
  };

  render() {
    const { files, search, uploading } = this.state;

    return (
      <AppInterface
        fileReady={!!uploading}
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
