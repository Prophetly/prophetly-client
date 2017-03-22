var React = require('react');
var ReactDOMServer = require('react-dom/server');

// rc-tabs
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

//var UploadSectionComponent = require('./UploadSection.react.js');

import DropzoneComponent from 'react-dropzone-component';
import '../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';

var componentConfig = {
  iconFiletypes: ['.csv'],
  showFiletypeIcon: false,
  postUrl: 'http://localhost:3000/upload',
};

var djsConfig = {
  dictDefaultMessage: 'Upload dataset file here',
  addRemoveLinks: false,
  maxFiles: 1,
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <span></span>
  ),
}

var _dropzone;
var eventHandlers = {
  init: function(dz) {_dropzone = dz;},
  complete: function(file) {_dropzone.removeFile(file);}
};


// Key of the default tab, Configuration
const defaultTabKey = '1';

class PanelContent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.id, 'constructor');
  }

  componentWillReceiveProps() {
    console.log(this.props.id, 'componentWillReceiveProps');
  }

  render() {
    const count = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];// new Array(4) skip forEach ....
    const els = count.map((c, i) => {
      return (<p key={i}>
        <button>{this.props.id}</button>
      </p>);
    });
    return <div style={{ height: 200, overflow: 'auto' }}>{els}</div>;
  }
}
PanelContent.propTypes = {
  id: React.PropTypes.number,
};

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
          <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
        </TabPane>
        <TabPane tab={`Dashboard`} key="2">
          <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
        </TabPane>
      </Tabs>
    </div>);
  },
});

module.exports = TabSectionComponent;
