import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Tabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import { TabPane } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import ConfigurationComponent from './ConfigurationComponent.react.js';
import DashboardComponent from './DashboardComponent.react.js';

import NotificationCenterContainer from '../containers/NotificationCenterContainer';

// primer-css
import '../../node_modules/primer-css/build/build.css';

// key of the default open tab
const defaultTabKey = '1';

const NotFound = () => (
  <h2>404</h2>
);

class TabSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="overflow-handler full-height">
        <NotificationCenterContainer />
        <div className="d-block border p-4" style={{'backgroundColor': '#007eff', 'color': '#e6f2ff'}}>
          <h2>Prophetly</h2>
        </div>

        <Tabs
          defaultActiveKey={defaultTabKey}
          renderTabBar={() => <ScrollableInkTabBar onTabClick={AppComponent.onTabClick}/>}
          renderTabContent={() => <TabContent />}
          onChange={AppComponent.onChange}
          className="full-height overflow-handler"
        >
          <TabPane tab={`Configuration`} key="1">
            <ConfigurationComponent />
          </TabPane>
          <TabPane tab={`Dashboard`} key="2">
            <DashboardComponent />
          </TabPane>
        </Tabs>
      </div>
  );
  }
}

const AppComponent = React.createClass({
  getInitialState() {
    return {
      tabKey: defaultTabKey,
    };
  },

  onChange(key) {},

  onTabClick(key) {
    this.setState({
      tabKey: key,
    });
  },

  render() {
    return (
      <Router>
        <div className="full-height">
          <Route exact path='/' component={TabSection} />
          <Route path='/file/:filename' component={TabSection}/>
        </div>
      </Router>
    );
  },
});

export default AppComponent;
