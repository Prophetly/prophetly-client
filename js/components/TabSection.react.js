var React = require('react');
var ReactDOMServer = require('react-dom/server');


import { Grid, Row, Col } from 'react-flexbox-grid';

// rc-tabs
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// app components
import FileUploadComponent from './FileUpload.react.js';
import FileListComponent from './FileList.react.js'

// primer-css
import '../../node_modules/primer-css/build/build.css';

// Key of the default tab, Configuration
const defaultTabKey = '1';

const TabSectionComponent = React.createClass({
  getInitialState() {
    return {
      tabKey: defaultTabKey,
    };
  },

  onChange(key) {
    //console.log(`onChange ${key}`);
  },

  onTabClick(key) {
    //console.log(`onTabClick ${key}`);
    this.setState({
      tabKey: key,
    });
  },

  render() {
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
                    <FileUploadComponent />
                    <FileListComponent />
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={12} md={9} style={{'marginTop': '30px'}}>
                <div className="blankslate blankslate-spacious">
                  <h3>Your model plots</h3>
                  <p>Start with a dataset to forecast</p>
                </div>
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
