import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import FileListContainer from '../containers/FileListContainer';
import ControlPanelContainer from '../containers/ControlPanelContainer';
import DataPreviewContainer from '../containers/DataPreviewContainer';


class ConfigurationComponent extends React.Component {
  /* eslint-disable no-useless-constructor */
  constructor(props) {
    super(props);
  }
  /* eslint-disable no-useless-constructor */

  render() {
    return (<Grid fluid className="full-height">
        <Row className="full-height">
          <FileListContainer />
          <Col xs={12} sm={12} md={9} style={{'marginTop': '30px'}} className="overflow-handler">
            <ControlPanelContainer />
            <Row>
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
