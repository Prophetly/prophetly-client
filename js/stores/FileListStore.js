'use strict';

import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
import {List} from 'immutable';
const { fromJS } = require('immutable');

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/AppActionTypes';


class FileListStore extends ReduceStore {
  getInitialState() {
    return new Map({
      files: List()
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.UPLOAD_FILE_SUCCESS:
        return state.set('files', state.get('files').push(action.data.name));

      case ActionTypes.SET_FILE_LIST:
        return state.set('files', fromJS(action.data.files));

      default:
        return state;
    }
  }
}

export default new FileListStore(AppDispatcher);
