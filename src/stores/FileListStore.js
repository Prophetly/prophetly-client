import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
import {List} from 'immutable';
const { fromJS } = require('immutable');

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/AppActionTypes';


class FileListStore extends ReduceStore {
  getInitialState() {
    return new Map({
      files: List(),
      selectedFile: '',
    });
  }

  /* eslint-disable no-unreachable */
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.UPLOAD_FILE_SUCCESS:
        return state.set('files', state.get('files').push(action.data.fileName));
        break;

      case ActionTypes.GET_FILE_LIST_DATA:
        return state;
        break;

      case ActionTypes.SET_FILE_LIST_DATA:
        return state.set('files', fromJS(action.data.files));
        break;

      case ActionTypes.SELECT_FILE:
        return state.set('selectedFile', action.data.fileName);
        break;

      case ActionTypes.DELETE_FILE_SUCCESS:
        state = state.set('selectedFile', '');
        return state.set('files', state.get('files').remove(state.get('files').indexOf(action.data.fileName)));
        break;

      default:
        return state;
    }
  }
  /* eslint-disable no-unreachable */
}

export default new FileListStore(AppDispatcher);
