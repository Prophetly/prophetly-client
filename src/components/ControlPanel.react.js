import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Select from 'react-select';

import AppActions from '../actions/AppActions';

import 'react-select/dist/react-select.css';

import downloadSvg from '../assets/svg/desktop-download.svg';
import graphSvg from '../assets/svg/graph.svg';


class ControlPanelComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  actionGetForecastData(props) {
    let futureDurationValue = parseInt(document.getElementById('future-duration').value);

    if (props.columnValues['datestamp-column'] === undefined) {
      AppActions.showNotification('danger', 'Please select a value for datestamp-column.', 1000);
    } else if (props.columnValues['y-column'] === undefined) {
      AppActions.showNotification('danger', 'Please select a value for y-column.', 1000);
    } else if (props.columnValues['datestamp-column'] === props.columnValues['y-column']) {
      AppActions.showNotification('warning', 'Value of datestamp-column and y-column can\'t be same.', 1000);
    } else if (isNaN(futureDurationValue) || futureDurationValue === 0) {
      AppActions.showNotification('danger', 'Value of future duration should be a positive number.', 1000);
    } else {
      // change the tab, behind the scene
      document.getElementsByClassName('rc-tabs-tab')[1].click();

      AppActions.getForecastData(
        props.columnValues['datestamp-column'],
        props.columnValues['y-column'],
        props.selectedFile,
        document.getElementById('components-checkbox').checked,
        futureDurationValue,
      );
    }
  }

  actionUpdateColumnValue(column_id, column_value) {
    AppActions.updateColumnValue(column_id, column_value);
  }

  // closure based solution to the issue 1458 in the repo 'react-select'
  // https://github.com/JedWatson/react-select/issues/1458
  _createChangeHandler(name) {
    const onChange = (newValue) => this.actionUpdateColumnValue(name, newValue);
    return onChange;
  }

  toggleCheckbox() {
    //
  }

  render() {
    // to handle multiple sourced 'onChange' events
    const onChange = (name) => this._createChangeHandler(name);

    return (
      <Row>
        <Col xs={12}>
          <Row start="xs">
            <Col xs={3}>
              <Select
                name="datestamp-column"
                options={this.props.columns}
                placeholder="datestamp column"
                onChange={onChange("datestamp-column")}
                value={this.props.columnValues["datestamp-column"]}
                clearable={false}
              />
            </Col>
            <Col xs={3}>
              <Select
                name="y-column"
                options={this.props.columns}
                placeholder="y column"
                onChange={onChange("y-column")}
                value={this.props.columnValues["y-column"]}
                clearable={false}
              />
            </Col>
            <Col xs={3}>
              <label className="bg-gray-light p-2">
                <input id="components-checkbox" type="checkbox" />
                <span style={{'marginLeft': '5px'}}>Plot components</span>
              </label>
            </Col>
            <Col xs={3}>
              <button
                style={{'marginBottom': '40px'}}
                className="btn btn-block btn-danger btn-outline"
                type="button"
                onClick={() => this.actionGetForecastData(this.props)}
              >
                <img
                  src={graphSvg}
                  alt="Forecast"
                  style={{'marginRight': '5px'}}
                />
                Forecast
              </button>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Row start="xs">
            <Col xs={3}>
              <input
                id="future-duration"
                className="form-control input-block mb-3"
                type="number"
                placeholder="Forecast duration (in days)"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <div className="clearfix border p-1 bg-blue-light">
            <button
              className={`btn btn-sm left mr-3${this.props.selectedFile === '' ? ' disabled' : ''}`}
              type="button"
            >
              <img
                src={downloadSvg}
                style={{'marginRight': '5px'}}
                alt="Download"
              />
              Download
            </button>
            <span className="state state-open ml-1">original data</span>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ControlPanelComponent;
