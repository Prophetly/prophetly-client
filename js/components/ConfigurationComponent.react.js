'use strict';

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TabPane } from 'rc-tabs';

import FileListContainer from '../containers/FileListContainer';
import ControlPanelContainer from '../containers/ControlPanelContainer';
import DataPreviewContainer from '../containers/DataPreviewContainer';

import FileUploadComponent from './FileUpload.react.js';
import PlotlyGraphComponent from './PlotlyGraphComponent.react.js';

// dropdown style
import '../../node_modules/react-dropdown/style.css';


class ConfigurationComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  _updateCheckbox() {
    //
  }

  render() {
    return (<Grid fluid className="full-height">
        <Row className="full-height">
          <FileListContainer />
          <Col xs={12} sm={12} md={9} style={{'marginTop': '30px'}} className="overflow-handler">
            <Row center="xs">
              <Col xs={12}>
                <ControlPanelContainer />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="clearfix border p-1 bg-blue-light">
                  <button className="btn btn-sm left mr-3" type="button">
                    <img
                      src="../../node_modules/octicons/build/svg/desktop-download.svg"
                      style={{'position': 'relative', 'top': '3px', 'marginRight': '5px'}}
                    />
                    Download
                  </button>
                  <label>
                    <input type="checkbox" disabled="disabled" onChange={this._updateCheckbox}/>
                    <span className="ml-1">include previous data</span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row center="xs">
              <Col xs={12}>
                <DataPreviewContainer />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>);
  }
};

export default ConfigurationComponent;
