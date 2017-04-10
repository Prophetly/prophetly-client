import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
import {List} from 'immutable';
const { fromJS } = require('immutable');

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/AppActionTypes';


class NotificationCenterStore extends ReduceStore {
  getInitialState() {
    return new Map({
      position: 'top-right',
      timeout: 0,
      notifications: List(),
    });
  }

  /* eslint-disable no-unreachable */
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SHOW_NOTIFICATION:
        state = state.set('timeout', action.data.timeout);
        return state.set('notifications', fromJS([action.data.notification]));
        break;

      case ActionTypes.HIDE_NOTIFICATION:
        return state.set('notifications', List());
        break;

      default:
        return state;
    }
  }
  /* eslint-disable no-unreachable */
}

export default new NotificationCenterStore(AppDispatcher);
