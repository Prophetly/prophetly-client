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
    // component scope
    var _this = this;

    // create a new Dropzone instance on the 'upload button'
    var _dropzone = new Dropzone("button#upload-button", {
      url: "http://localhost:8888/upload",
      previewTemplate: '<div style="display:none"></div>',
      acceptedFiles: 'text/csv'
    });

    // upload successful
    _dropzone.on('complete', function(file) {
      _dropzone.removeFile(file);

      _this.actionUploadFile(file.name, false);
    });

    // upload failed
    // TODO: check is 'file.name' available in case of 'error'
    //_dropzone.on('error', errorMessage);
  }

  render() {
    return <button style={{'marginBottom': '40px'}}
                   className="btn btn-block"
                   id="upload-button"
                   type="button">
                     Upload
                  </button>;
  }
}

export default FileUploadComponent;
