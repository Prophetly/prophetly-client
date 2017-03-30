/* global Plotly */
import React from 'react';

import AppActions from '../actions/AppActions';


class PlotlyGraphComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPlot() {
    console.log(this.props.plotData, 'renderPlot');
    Plotly.newPlot(
      this.props.plotId,
      this.props.plotData,
      {margin: {l:0, t: 0, r:0}}
    );
  }

  componentDidMount() {
    this.renderPlot();
  }

  componentDidUpdate() {
    this.renderPlot();
  }

  render() {
    return (
      <div id={this.props.plotId}></div>
    );
  }
}

export default PlotlyGraphComponent;
