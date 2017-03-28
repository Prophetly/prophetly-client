'use strict';

import React from 'react';
import Axios from 'axios';

import AppActions from '../actions/AppActions';


class FileListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  actionSetFileList(files) {
    AppActions.setFileList(files);
  }

  actionSetColumns(file, columns) {
    AppActions.setColumns(file, columns);
  }

  actionSelectFile(file) {
    AppActions.selectFile(file);

    // collect columns for the selected file and update the dropdown
    var _this = this;

    Axios.get('http://localhost:8888/column/' + file)
      .then(function (response) {
        _this.actionSetColumns(file, response.data.columns);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    var _this = this;

    Axios.get('http://localhost:8888/upload')
      .then(function (response) {
        _this.actionSetFileList(response.data.files);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let fileList;
    const _files = this.props.files;
    const _selectedFile = this.props.selectedFile;

    if (_files.size == 0) {
      fileList = (<span className="menu-item">
            Upload dataset to get started
          </span>)
    } else {
      fileList = _files.map((file) => (
        <a key={file}
          className={`menu-item${_selectedFile === file ? ' selected' : ''}`}
          href={`/#/file/${file}`}
          onClick={() => this.actionSelectFile(file)}>
          <span className="branch-ref css-truncate css-truncate-target">
            {file}
          </span>
        </a>
      ));
    }

    return (<nav className="menu">
        <span className="menu-heading">Available Datasets</span>
        {fileList}
      </nav>);
  }
}

export default FileListComponent;
