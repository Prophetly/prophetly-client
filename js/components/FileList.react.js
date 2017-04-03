'use strict';

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import AppActions from '../actions/AppActions';
import AsyncActions from '../utils/AsyncActions';

import FileUploadComponent from './FileUpload.react.js';


class FileListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  actionSelectFile(file) {
    AppActions.selectFile(file);

    // collect columns for the selected file and update the dropdown
    AppActions.getColumnsData(file);

    // collect the file data
    AppActions.getFileData(file);
  }

  actionDeleteFile(file) {
    AppActions.deleteFile(file);
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
          <span className="branch-ref css-truncate css-truncate-target expandable">
            {file}
          </span>
        </a>
      ));
    }

    return (
      <Col xs={12} sm={12} md={3} style={{'marginTop': '30px'}}>
        <Row center="xs">
          <Col xs={10}>
            <FileUploadComponent />
          </Col>
          <Col xs={2}>
            <button
              className={`btn btn-danger${_selectedFile === '' ? ' disabled' : ''}`}
              type="button"
              onClick={() => this.actionDeleteFile(_selectedFile)}>X</button>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <nav className="menu">
                <span className="menu-heading">Available Datasets</span>
                {fileList}
            </nav>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default FileListComponent;
