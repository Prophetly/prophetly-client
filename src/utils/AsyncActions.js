'use strict';

import Axios from 'axios';

import AppActions from '../actions/AppActions';
import AppConstants from '../constants/AppConstants';


const AsyncActions = {
  fetchFileList() {
    Axios.get(AppConstants.PROPHETLY_SERVER_ADDRESS + '/upload')
    .then(function (response) {
      AppActions.setFileList(response.data.files);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  deleteFile(file) {
    Axios.post(AppConstants.PROPHETLY_SERVER_ADDRESS + '/filedata/' + file)
    .then(function (response) {
      AppActions.deleteFileSuccess(file);
    })
    .catch(function (error) {
      //AppActions.deleteFileError();
    })
  },

  fetchFileData(file) {
    Axios.get(AppConstants.PROPHETLY_SERVER_ADDRESS + '/filedata/' + file)
    .then(function (response) {
      AppActions.setFileData(file, response.data);
    })
    .catch(function (error) {
      console.log();
    });
  },

  fetchColumnsData(file) {
    Axios.get(AppConstants.PROPHETLY_SERVER_ADDRESS + '/column/' + file)
    .then(function (response) {
      AppActions.setColumnsData(file, response.data.columns);
    })
    .catch(function (error) {
      console.log(error);
    });
  },

  fetchForecastData(dsColumnValue, yColumnValue, selectedFile, plotComponents, futureDurationValue) {
    Axios.get(AppConstants.PROPHETLY_SERVER_ADDRESS + '/data', {
      params: {
        ds: dsColumnValue,
        y: yColumnValue,
        file: selectedFile,
        plotComponents: plotComponents,
        futureDurationValue: futureDurationValue,
      }
    })
    .then(function(response) {
      AppActions.setForecastData(response.data.plots);
    })
    .catch(function(error) {
      AppActions.showNotification('danger', error.response.data, 0);
    });
  },
};

export default AsyncActions;
