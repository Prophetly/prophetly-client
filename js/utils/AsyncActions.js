'use strict';

import Axios from 'axios';

import AppActions from '../actions/AppActions';


const AsyncActions = {
  fetchFileList() {
    Axios.get('http://localhost:8888/upload')
    .then(function (response) {
      AppActions.setFileList(response.data.files);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  fetchFileData(file) {
    console.log('AsyncActions fetchFileData', file);
    Axios.get('http://localhost:8888/filedata/' + file)
    .then(function (response) {
      AppActions.setFileData(file, response.data);
    })
    .catch(function (error) {
      console.log();
    });
  },

  fetchColumnsData(file) {
    Axios.get('http://localhost:8888/column/' + file)
    .then(function (response) {
      AppActions.setColumnsData(file, response.data.columns);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  fetchForecastData(a, b, c) {
    Axios.get('http://localhost:8888/data')
    .then(function(response) {
      AppActions.setForecastData(response.data.plots);
    })
    .catch(function(error) {
      console.log(error);
    });
  },
};

export default AsyncActions;
