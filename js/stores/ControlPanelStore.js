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
      columns: List(),
      columnValues: Map(),
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.GET_COLUMNS_DATA:
        return state;
        break;

      case ActionTypes.SET_COLUMNS_DATA:
        state = state.set('selectedFile', action.data.fileName);
        return state.set('columns', action.data.columns);
        //return state.setIn(['columns', action.data.fileName], action.data.columns);
        break;

      case ActionTypes.UPDATE_COLUMN_VALUE:
        return state.setIn(['columnValues', action.data.column_id], action.data.column_value.value);
        break;

      default:
        return state;
    }
  }
}

export default new ControlPanelStore(AppDispatcher);
