var React = require('react');
var axios = require('axios');

import FileListStore from '../stores/FileListStore';


class FileListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      files: FileListStore.getAll()
    });
  }

  componentDidMount() {
    var _this = this;

    FileListStore.addChangeListener(_this._onChange);

    /*
    this.serverRequest =
      axios
        .get("http://localhost:3000/upload")
        .then(function(result) {
          _this.setState({
            files: result.data.files
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    */
  }

  render() {
    var fileList = null;
    if (this.state.files.length == 0) {
      fileList = (<a className="menu-item" href="#">
          <span className="branch-ref css-truncate css-truncate-target">
            Upload dataset to get started
          </span>
        </a>)
    } else {
      fileList = this.state.files.map((file) => (
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
