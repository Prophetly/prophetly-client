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

  componentDidUpdate() {
    //console.log('componentDidUpdate FileListContainer');
  }

  render() {
    return <FileListComponent files={this.state.fileList.get('files')}
            selectedFile={this.state.fileList.get('selectedFile')} />;
  }
}

export default Container.create(FileListContainer);
