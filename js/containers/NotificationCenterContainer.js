'use strict';

import React, {Component} from 'react';
import {Container} from 'flux/utils';

import NotificationCenterStore from '../stores/NotificationCenterStore';
import NotificationCenterComponent from '../components/NotificationCenter.react.js';


class NotificationCenterContainer extends Component {
  static getStores() {
    return [NotificationCenterStore];
  }

  static calculateState(prevState) {
    return {
      notificationCenter: NotificationCenterStore.getState(),
    };
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate NotificationCenterCotainer');
  }

  render() {
    return (
      <NotificationCenterComponent
        position={this.state.notificationCenter.get('position')}
        notifications={this.state.notificationCenter.get('notifications')}
        timeout={this.state.notificationCenter.get('timeout')}
      />
    );
  }
}

export default Container.create(NotificationCenterContainer);
