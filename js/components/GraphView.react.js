import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PlotlyGraphComponent from './PlotlyGraphComponent.react.js';

import AppActions from '../actions/AppActions';


class GraphViewComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate GraphViewComponent');
  }

  render() {
    var result;

    if (this.props.isProcessing) {
      result = (
        <div className="blankslate blankslate-spacious">
          <h3>Preparing your forecast</h3>
          <p>Hold tight, it should not take much time</p>
        </div>
      );
    } else if (this.props.isProcessing === false && this.props.graphViewData.size == 0) {
      result = (
        <div className="blankslate blankslate-spacious">
          <h3>Configure your model</h3>
          <p>Remember to select the right values</p>
        </div>
      );
    } else {
      result = (
        <div>
          <div className="flash">
           Here is your interactive forecast
          </div>
          <PlotlyGraphComponent
            plotId="plot-a"
            plotData={this.props.graphViewData.toJS()}
          />
        </div>
      );
    }
    return (result);
  }
}

export default GraphViewComponent;
