'use strict';

import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
import {List} from 'immutable';
const { fromJS } = require('immutable');

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/AppActionTypes';


class DataPreviewStore extends ReduceStore {
  getInitialState() {
    return new Map({
      fileName: '',
      fileRows: List(),
      fileColumns: List(),
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.GET_FILE_DATA:
        return state;
        break;

      case ActionTypes.SET_FILE_DATA:
        console.log('DataPreviewStore', action.data.fileName, action.data.fileData.rows, action.data.fileData.columns);
        state = state.set('fileName', action.data.fileName);
        state = state.set('fileRows', fromJS(action.data.fileData.rows));
        return state.set('fileColumns', fromJS(action.data.fileData.columns));
        break;

      default:
        return state;
    }
  }
}

export default new DataPreviewStore(AppDispatcher);
