'use strict';

import ActionTypes from './AppActionTypes';
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
};

export default Actions;
