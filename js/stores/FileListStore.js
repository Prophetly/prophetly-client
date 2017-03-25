'use strict';

import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
import {List} from 'immutable';

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
        var _files = state.get('files');
        return state.set('files', _files.push(action.data.name));

      default:
        return state;
    }
  }
}

export default new FileListStore(AppDispatcher);
