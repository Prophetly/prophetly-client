'use strict';

import React, {Component} from 'react';
import {Container} from 'flux/utils';

import ControlPanelStore from '../stores/ControlPanelStore';
import ControlPanelComponent from '../components/ControlPanel.react.js';


class ControlPanelContainer extends Component {
  static getStores() {
    return [ControlPanelStore];
  }

  static calculateState(prevState) {
    return {
      controlPanel: ControlPanelStore.getState(),
    };
  }

  render() {
    return (<ControlPanelComponent
            selectedFile={this.state.controlPanel.get('selectedFile')}
            columns={this.state.controlPanel.toJS().columns}
          />)
  }
}

export default Container.create(ControlPanelContainer);
