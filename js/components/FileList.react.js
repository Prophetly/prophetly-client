'use strict';

import React from 'react';
import Axios from 'axios';

import FileListStore from '../stores/FileListStore';
import AppActions from '../actions/AppActions';


class FileListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  actionSetFileList(files) {
    AppActions.fetchFiles(files);
  }

  componentWillMount() {
    var _this = this;

    Axios.get('http://localhost:3000/upload')
      .then(function (response) {
        _this.actionSetFileList(response.data.files);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const _files = this.props.fileList.get('files');
    let fileList;

    if (_files.size == 0) {
      fileList = (<span className="menu-item">
            Upload dataset to get started
          </span>)
    } else {
      fileList = _files.map((file) => (
        <a key={file} className="menu-item" href="#">
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
