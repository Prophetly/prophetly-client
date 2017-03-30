'use strict';

import ActionTypes from './AppActionTypes';
import AsyncActions from '../utils/AsyncActions';
import Dispatcher from '../dispatcher/AppDispatcher';

const Actions = {
  uploadFile(fileName, isError) {
    if (isError) {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_ERROR,
        data: {fileName: fileName},
      });
    } else {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_SUCCESS,
        data: {fileName: fileName},
      });
    }
  },

  setFileList(files) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_FILE_LIST,
      data: {files: files},
    });
  },

  selectFile(file) {
    Dispatcher.dispatch({
      type: ActionTypes.SELECT_FILE,
      data: {fileName: file},
    });
  },

  setColumns(file, columns) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_COLUMNS,
      data: {fileName: file, columns: columns},
    });
  },

  updateColumnValue(column_id, column_value) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_COLUMN_VALUE,
      data: {column_id: column_id, column_value: column_value},
    });
  },

  prepareForecastData(dsColumnValue, yColumnValue, selectedFile) {
    Dispatcher.dispatch({
      type: ActionTypes.PREPARE_FORECAST_DATA,
    });

    AsyncActions.fetchForecastData(dsColumnValue, yColumnValue, selectedFile);
  },

  fetchForecastData(data) {
    console.log('fetchForecastData invoked from AsyncActions', data);
    Dispatcher.dispatch({
      type: ActionTypes.FETCH_FORECAST_DATA,
      data: {plotData: data},
    });
  },
};

export default Actions;
