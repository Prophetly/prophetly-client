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
    console.log('graphView render', this.props.isProcessing);
    var result;
    if (this.props.isProcessing) {
      result = (<div>waiting</div>);
    } else {
      result = (
        <PlotlyGraphComponent
          plotId="plot-a"
          plotData={this.props.graphViewData.toJS()}
        />
      );
    }
    return (result);
  }
}

export default GraphViewComponent;
