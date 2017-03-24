/*
'use strict';

import {Dispatcher} from 'flux';

var dispatcher = new Dispatcher();
export default dispatcher;
*/

import AppActions from '../actions/AppActions';

/*
var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

// Convenience method to handle dispatch requests
AppDispatcher.handleAction = function (action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
*/

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), AppActions);

module.exports = AppDispatcher;
