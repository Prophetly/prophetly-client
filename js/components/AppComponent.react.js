import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Tabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import { TabPane } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

//import { AlertList } from "react-bs-notifier";

import ConfigurationComponent from './ConfigurationComponent.react.js';
import DashboardComponent from './DashboardComponent.react.js';

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
    return (<div>
      <h1>Prophetly</h1>

      <Tabs
        defaultActiveKey={defaultTabKey}
        renderTabBar={() => <ScrollableInkTabBar onTabClick={AppComponent.onTabClick}/>}
        renderTabContent={() => <TabContent/>}
        onChange={AppComponent.onChange}
      >
        <TabPane tab={`Configuration`} key="1">
          <ConfigurationComponent />
        </TabPane>
        <TabPane tab={`Dashboard`} key="2">
          <DashboardComponent />
        </TabPane>
      </Tabs>
    </div>)
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
        <div>
          <Route exact path='/' component={TabSection} />
          <Route path='/file/:filename' component={TabSection}/>
        </div>
      </Router>
    );
  },
});

export default AppComponent;
