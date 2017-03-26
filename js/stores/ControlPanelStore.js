'use strict';

import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
import {List} from 'immutable';
const { fromJS } = require('immutable');

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/AppActionTypes';


class ControlPanelStore extends ReduceStore {
  getInitialState() {
    return new Map({
      selectedFile: '',
      columns: List()
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.SET_COLUMNS:
        state.set('selectedFile', action.data.fileName);
        return state.set('columns', action.data.columns);

      default:
        return state;
    }
  }
}

export default new ControlPanelStore(AppDispatcher);
