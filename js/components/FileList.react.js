var React = require('react');
var axios = require('axios');

import FileListStore from '../stores/FileListStore';


class FileListComponent extends React.Component {
  constructor(props) {
    super(props);

    //this.state = props.fileList;

    //this._onChange = this._onChange.bind(this);
  }

  /*
  _onChange() {
    this.setState(FileListStore.getState());
  }
  */

  /*
  componentDidMount() {
    var _this = this;

    FileListStore.addListener(_this._onChange);
  }
  */

  render() {
    console.log('rendering', this.props.fileList.get('files'));

    var fileList = null;
    if (this.props.fileList.get('files').size == 0) {
      fileList = (<a className="menu-item" href="#">
          <span className="branch-ref css-truncate css-truncate-target">
            Upload dataset to get started
          </span>
        </a>)
    } else {
      fileList = this.props.fileList.get('files').map((file) => (
        <a key={file} className="menu-item" href="#">
          <span className="branch-ref css-truncate css-truncate-target">
            {file}
          </span>
        </a>
      ));
    }

    return (<nav className="menu">
        <span className="menu-heading">Available Datasets</span>
        {fileList}
      </nav>);
  }
}

module.exports = FileListComponent;
