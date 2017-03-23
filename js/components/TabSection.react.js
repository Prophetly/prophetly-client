var React = require('react');
var ReactDOMServer = require('react-dom/server');

/*
react-grid-layout
=================
*/
import { Grid, Row, Col } from 'react-flexbox-grid';

// rc-tabs
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
var Dropzone = require('dropzone');

//var UploadSectionComponent = require('./UploadSection.react.js');

import '../../node_modules/primer-css/build/build.css';

// Key of the default tab, Configuration
const defaultTabKey = '1';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _dropzone = new Dropzone("button#upload-button", {
      url: "http://localhost:3000/upload",
      previewTemplate: '<div style="display:none"></div>',
    });

    _dropzone.on('complete', function(file) {_dropzone.removeFile(file)});
  }

  render() {
    return <button className="btn btn-block btn-outline" id="upload-button" type="button">Dataset</button>;
  }
}

const TabSectionComponent = React.createClass({
  getInitialState() {
    return {
      start: 0,
      tabKey: defaultTabKey,
    };
  },

  onChange(key) {
    console.log(`onChange ${key}`);
  },

  onTabClick(key) {
    console.log(`onTabClick ${key}`);
    this.setState({
      tabKey: key,
    });
  },

  render() {
    const start = this.state.start;
    const disabled = true;
    return (<div>
      <h1>Prophetly</h1>

      <Tabs
        defaultActiveKey={defaultTabKey}
        renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick}/>}
        renderTabContent={() => <TabContent/>}
        onChange={this.onChange}
      >
        <TabPane tab={`Configuration`} key="1">
          <Grid fluid>
            <Row>
              <Col xs={12} sm={12} md={3} style={{'marginTop': '30px'}}>
                <Row center="xs">
                  <Col xs={12}>
                    <UploadButton />
                  </Col>
                </Row>
              </Col>
              <Col xs={6} md={3} style={{'marginTop': '30px'}}>
                Go?
              </Col>
            </Row>
          </Grid>
        </TabPane>
        <TabPane tab={`Dashboard`} key="2">
          <Grid fluid>
            <Row>
              <Col xs={6} md={3}>
                Hello, world!
              </Col>
              <Col xs={6} md={3}>
                How are you?
              </Col>
            </Row>
          </Grid>
        </TabPane>
      </Tabs>
    </div>);
  },
});

module.exports = TabSectionComponent;
