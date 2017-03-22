var path = require('path');

module.exports = {
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname + 'js/'),
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets: ["es2015", "react"]} },
      { test: /\.css$/, loader:'style-loader!css-loader'},
    ],
  },
};
