/*
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
*/

//var app = new (require('express'))();
//var port = process.env.PORT || (process.argv[2] || 3000);

/*
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get("/demo", function(req, res) {
  res.sendFile(__dirname + '/demo.html');
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
*/

//
/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  //res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  //res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.get('/test', function(req, res) {
  res.send('alive, yay');
});

app.post('/upload', function(req, res){
    console.log(req);

    setTimeout(function(){
        res.json({status: 0})
    }, 5000);
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
*/
//

var express     = require('express'),
    path        = require('path'),
    multer      = require('multer'),
    bodyParser  = require('body-parser'),
    MulterImpl  = require('./multer-backend'),
    app         = express();

app.set('port', process.env.PORT || 3000);
//app.use(express.static('../'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
  //res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  //res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

//Call the multerImpl and pass in app state to it
require('./multer-backend')(app);

module.exports = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
  console.log('Visit http://localhost:' + app.get('port') + '/example/ to check out the upload example');
});
