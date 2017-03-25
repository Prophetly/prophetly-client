'use strict';

import React, {Component} from 'react';
import {Container} from 'flux/utils';

import FileListStore from '../stores/FileListStore';
import FileListComponent from '../components/FileList.react.js';


class FileListContainer extends Component {
  static getStores() {
    return [FileListStore];
  }

  static calculateState(prevState) {
    return {
      fileList: FileListStore.getState(),
    };
  }

  render() {
    console.log('rendering in container');
    return <FileListComponent fileList={this.state.fileList} />;
  }
}

export default Container.create(FileListContainer);
