'use strict';

import {ReduceStore} from 'flux/utils';
import {Map} from 'immutable';
const { fromJS } = require('immutable');

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../actions/AppActionTypes';


class GraphViewStore extends ReduceStore {
  getInitialState() {
    return new Map({
      isProcessing: false,
      selectedTab: 'prediction',
      graphViewData: Map({}),
    });
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.GET_FORECAST_DATA:
        return state.set('isProcessing', true);
        break;

      case ActionTypes.SET_FORECAST_DATA:
        state = state.set('isProcessing', false);
        state = state.set('selectedTab', 'prediction')
        state = state.set('graphViewData', fromJS(action.data.forecastData));
        return state;
        break;

      case ActionTypes.CHANGE_DASHBOARD_TAB:
        return state.set('selectedTab', action.data.tabName);
        break;

      default:
        return state;
    }
  }
}

export default new GraphViewStore(AppDispatcher);
