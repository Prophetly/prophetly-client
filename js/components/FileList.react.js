var React = require('react');
var axios = require('axios');


class FileListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: ['no files']
    };
  }

  componentDidMount() {
    var _this = this;
    
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
  }

  render() {
    const fileList = this.state.files.map((file) => (
      <a key={file} className="menu-item" href="#">
        <span className="branch-ref css-truncate css-truncate-target">
          {file}
        </span>
      </a>
    ));

    return (<nav className="menu">
        <span className="menu-heading">Available Datasets</span>
        {fileList}
      </nav>);
  }
}

module.exports = FileListComponent;
