'use strict';

import ActionTypes from './AppActionTypes';
import Dispatcher from '../dispatcher/AppDispatcher';

const Actions = {
  uploadFile(fileName, isError) {
    if (isError) {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_ERROR,
        data: {name: fileName},
      });
    } else {
      Dispatcher.dispatch({
        type: ActionTypes.UPLOAD_FILE_SUCCESS,
        data: {name: fileName},
      });
    }
  },

  fetchFiles(files) {
    Dispatcher.dispatch({
      type: ActionTypes.SET_FILE_LIST,
      data: {files: files},
    });
  },
};

export default Actions;
