import React from 'react';

import PlotlyGraphComponent from './PlotlyGraphComponent.react.js';

import AppActions from '../actions/AppActions';


class GraphViewComponent extends React.Component {
  /* eslint-disable no-useless-constructor */
  constructor(props) {
    super(props);
  }
  /* eslint-disable no-useless-constructor */

  componentDidUpdate() {
    //console.log('componentDidUpdate GraphViewComponent');
  }

  actionChangeDashboardTab(tabName) {
    AppActions.changeDashboardTab(tabName);
  }

  render() {
    let result;

    if (this.props.isProcessing) {
      result = (
        <div className="blankslate blankslate-spacious">
          <h3>Preparing your forecast</h3>
          <p>Hold tight, it should not take much time</p>
        </div>
      );
    } else if (this.props.isProcessing === false && this.props.graphViewData.size === 0) {
      result = (
        <div className="blankslate blankslate-spacious">
          <h3>Configure your model</h3>
          <p>Remember to select the right values</p>
        </div>
      );
    } else {
      result = (
        <div>
          <div className="tabnav">
            <nav className="tabnav-tabs">
              {this.props.graphViewData.map(
                  (value, key) => <a href="#" onClick={() => this.actionChangeDashboardTab(key)} className={`tabnav-tab${this.props.selectedTab === key ? ' selected' : ''}`}>{key}</a>
              )}
            </nav>
          </div>
          <PlotlyGraphComponent
            plotId={`plot-${this.props.selectedTab}`}
            plotData={this.props.graphViewData.get(`${this.props.selectedTab}`).toJS()}
          />
        </div>
      );
    }
    return (result);
  }
}

export default GraphViewComponent;
