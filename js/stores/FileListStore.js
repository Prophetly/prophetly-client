/*
import {ReduceStore} from 'flux/utils';

class FileListStore extends ReduceStore {
  getInitialState() {

  }

  reduce(state, action) {

  }
}
*/

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

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
  console.log('payload', payload);
  console.log(payload.type, ActionTypes.UPLOAD_FILE_SUCCESS);

  switch(payload.type) {

    case ActionTypes.UPLOAD_FILE_SUCCESS:
      _files.push(payload.data.name);
      console.log('switch case emit');
      FileListStore.emitChange();

      break;

    default:
      console.log('switch case emit default');
  }

});

module.exports = FileListStore;
