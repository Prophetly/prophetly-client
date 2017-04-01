var React = require('react');
var Dropzone = require('dropzone');

import AppActions from '../actions/AppActions';

//import '../../node_modules/octicons/build/octicons.css';


class FileUploadComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  actionUploadFile(fileName, isError) {
    AppActions.uploadFile(fileName, isError);
  }

  componentDidMount() {
    var _this = this;

    // create a new Dropzone instance on the 'upload button'
    var _dropzone = new Dropzone("button#upload-button", {
      url: "http://localhost:8888/upload",
      previewTemplate: '<div style="display:none"></div>',
      acceptedFiles: 'text/csv'
    });

    // upload successful
    _dropzone.on('success', function(file) {
      _dropzone.removeFile(file);

      _this.actionUploadFile(file.name, false);
    });

    // upload failed
    _dropzone.on('error', function(file, errorMessage, xhr) {
      console.log(file.name, xhr.status, xhr.statusText);
    });
  }

  render() {
    return (
      <button
        style={{'marginBottom': '40px'}}
        className="btn btn-block"
        id="upload-button"
        type="button"
      >
        <img
          src="../../node_modules/octicons/build/svg/repo-push.svg"
          style={{'position': 'relative', 'top': '3px', 'marginRight': '5px'}}
        />
        Upload
      </button>
    );
  }
}

export default FileUploadComponent;
