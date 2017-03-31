'use strict';

import React from 'react';

import AppActions from '../actions/AppActions';
import AsyncActions from '../utils/AsyncActions';


class FileListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  actionSelectFile(file) {
    AppActions.selectFile(file);

    // collect columns for the selected file and update the dropdown
    AppActions.getColumnsData(file);

    // collect the file data
    console.log('AppActions.getFileData', file);
    AppActions.getFileData(file);
  }

  componentDidMount() {
    AppActions.getFileList();
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
