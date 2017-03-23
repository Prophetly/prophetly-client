var React = require('react');
var Dropzone = require('dropzone');


class FileUploadComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var _dropzone = new Dropzone("button#upload-button", {
      url: "http://localhost:3000/upload",
      previewTemplate: '<div style="display:none"></div>',
      acceptedFiles: 'text/csv'
    });

    _dropzone.on('complete', function(file) {_dropzone.removeFile(file)});
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

module.exports = FileUploadComponent;
