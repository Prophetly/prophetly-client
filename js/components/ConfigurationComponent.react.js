import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TabPane } from 'rc-tabs';

import FileUploadComponent from './FileUpload.react.js';
import FileListContainer from '../containers/FileListContainer';
import ControlPanelContainer from '../containers/ControlPanelContainer';

// dropdown style
import '../../node_modules/react-dropdown/style.css';


class ConfigurationComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={3} style={{'marginTop': '30px'}}>
            <Row center="xs">
              <Col xs={12}>
                <FileUploadComponent />
                <FileListContainer />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={9} style={{'marginTop': '30px'}}>
            <ControlPanelContainer />
            <Row center="xs">
              <Col xs={12}>
                <div className="blankslate blankslate-spacious">
                  <h3>Your model plots</h3>
                  <p>Start with a dataset to forecast</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>);
  }
};

export default ConfigurationComponent;
