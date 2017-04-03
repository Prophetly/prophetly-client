'use strict';

import React, { Component } from 'react';
import { Container } from 'flux/utils';

import GraphViewStore from '../stores/GraphViewStore';
import GraphViewComponent from '../components/graphView.react.js';


class GraphViewContainer extends Component {
  static getStores() {
    return [GraphViewStore];
  }

  static calculateState(prevState) {
    return {
      graphView: GraphViewStore.getState(),
    };
  }

  render() {
    return (
      <GraphViewComponent
        isProcessing={this.state.graphView.get('isProcessing')}
        graphViewData={this.state.graphView.get('graphViewData')}
        selectedTab={this.state.graphView.get('selectedTab')}
      />
    );
  }
}

export default Container.create(GraphViewContainer);
