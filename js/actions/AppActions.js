'use strict';

import ActionTypes from './AppActionTypes';
import Dispatcher from '../dispatcher/AppDispatcher';

const Actions = {
  uploadFile(fileName, isError) {
    if (isError) {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_ERROR,
        data: {name: fileName},
      });

      console.log('dispatcher uploadFile');
    } else {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_SUCCESS,
        data: {name: fileName},
      });

      console.log('dispatcher uploadFile');
    }
  },
};

export default Actions;

/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

// Define action methods
var FluxCartActions = {

  // Receive inital product data
  receiveProduct: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected product variation
  selectProduct: function (index) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  // Add item to cart
  addToCart: function (sku, update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    })
  },

  // Remove item from cart
  removeFromCart: function (sku) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      sku: sku
    })
  },

  // Update cart visibility status
  updateCartVisible: function (cartVisible) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }

};

module.exports = FluxCartActions;
*/
