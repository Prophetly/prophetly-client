var express     = require('express'),
    path        = require('path'),
    multer      = require('multer'),
    bodyParser  = require('body-parser'),
    fs          = require('fs'),
    app         = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({storage: storage});

// set the list of files in 'uploads' directory
app.post('/upload', upload.single('file'), function (req, res, next) {
  if (req.file && req.file.originalname) {
    console.log(`Received file ${req.file.originalname}`);
  }

  res.send({ responseText: req.file.path }); // You can send any response to the user here
});

// get the list of files in 'uploads' directory
app.get('/upload', function(req, res) {
  fs.readdir(process.cwd() + '/uploads/', (err, files) => {
    if (err) {
      res.json({'status': 500});
    }

    res.json({'files': files});
  });
});

// get the columns in a dataset file (.csv)
app.get('/column', function(req, res) {
  //{"columns": [{"value": "ds", "label": "ds"}, {"value": "y", "label": "y"}]}
  res.json({'columns': [{value: 'a', label: 'A'}, {value: 'b', label: 'B'}]});
});


module.exports = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
