'use strict';

import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
import {List} from 'immutable';
const { fromJS } = require('immutable');

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/AppActionTypes';


class GraphViewStore extends ReduceStore {
  getInitialState() {
    return new Map({
      isProcessing: false,
      graphViewData: List(),
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.GET_FORECAST_DATA:
        return state.set('isProcessing', true);
        break;

      case ActionTypes.SET_FORECAST_DATA:
        state = state.set('isProcessing', false);
        state = state.set('graphViewData', fromJS(action.data.plotData));
        return state;
        break;

      default:
        return state;
    }
  }
}

export default new GraphViewStore(AppDispatcher);
