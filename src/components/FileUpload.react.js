var React = require('react');
var Dropzone = require('dropzone');

import AppActions from '../actions/AppActions';
import AppConstants from '../constants/AppConstants';

import uploadSvg from '../assets/svg/repo-push.svg';


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
    var _dropzone = new Dropzone('button#upload-button', {
      url: AppConstants.PROPHETLY_SERVER_ADDRESS + '/upload',
      previewTemplate: '<div style="display:none"></div>',
      acceptedFiles: 'text/csv'
    });

    // dataset upload successful
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
          src={uploadSvg}
          style={{'marginRight': '5px'}}
          alt="Upload"
        />
        Upload
      </button>
    );
  }
}

export default FileUploadComponent;
