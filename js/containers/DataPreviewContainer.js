'use strict';

import React, {Component} from 'react';
import {Container} from 'flux/utils';

import DataPreviewStore from '../stores/DataPreviewStore';
import DataPreviewComponent from '../components/DataPreview.react.js';


class DataPreviewContainer extends Component {
  static getStores() {
    return [DataPreviewStore];
  }

  static calculateState(prevState) {
    return {
      dataPreview: DataPreviewStore.getState(),
    };
  }

  render() {
    return (
      <DataPreviewComponent
        fileName={this.state.dataPreview.get('fileName')}
        fileRows={this.state.dataPreview.get('fileRows')}
        fileColumns={this.state.dataPreview.get('fileColumns')}
      />
    );
  }
}

export default Container.create(DataPreviewContainer);
