import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TabPane } from 'rc-tabs';
//import createPlotlyComponent from 'react-plotlyjs';
//const PlotlyComponent = createPlotlyComponent(Plotly);


import FileUploadComponent from './FileUpload.react.js';
import FileListContainer from '../containers/FileListContainer';
import ControlPanelContainer from '../containers/ControlPanelContainer';
import PlotlyGraphComponent from './PlotlyGraphComponent.react.js';

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
            <PlotlyGraphComponent plotId="plot-p" plotData={[{type: 'scatter', x: [1,2], y: [2,4]}]} />
          </Col>
        </Row>
      </Grid>);
  }
};

export default ConfigurationComponent;
