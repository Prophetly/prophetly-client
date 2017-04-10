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

  /* eslint-disable no-unreachable */
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.GET_FILE_DATA:
        return state;
        break;

      case ActionTypes.SET_FILE_DATA:
        state = state.set('fileName', action.data.fileName);
        state = state.set('fileRows', fromJS(action.data.fileData.rows));
        return state.set('fileColumns', fromJS(action.data.fileData.columns));
        break;

      case ActionTypes.DELETE_FILE_SUCCESS:
        state = state.set('fileName', '');
        state = state.set('fileRows', List());
        return state.set('fileColumns', List());
        break;

      default:
        return state;
    }
  }
  /* eslint-disable no-unreachable */
}

export default new DataPreviewStore(AppDispatcher);
