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

  render() {
    return (<Grid fluid className="full-height">
        <Row className="full-height">
          <Col xs={12} sm={12} md={3} style={{'marginTop': '30px'}}>
            <Row center="xs">
              <Col xs={12}>
                <FileUploadComponent />
                <FileListContainer />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={9} style={{'marginTop': '30px'}} className="overflow-handler">
            <Row center="xs">
              <Col xs={12}>
                <ControlPanelContainer />
                <DataPreviewContainer />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>);
  }
};

export default ConfigurationComponent;
