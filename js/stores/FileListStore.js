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

/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var axios = require('axios');

import ActionTypes from '../actions/AppActionTypes';

var CHANGE_EVENT = 'change';

var _files = [];

//var _selected = -1;

var FileListStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    console.log('emitting change FileListStore');
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _files;
  },
});

FileListStore.dispatchToken = AppDispatcher.register(function(payload) {
  switch(payload.type) {

    case ActionTypes.UPLOAD_FILE_SUCCESS:
      _files.push(payload.data.name);
      FileListStore.emitChange();

      break;

    default:
      // don't do nothing
  }

});

module.exports = FileListStore;
*/
