import {DATA, DATA_SUCCESS, DATA_FAIL} from './../ActionTypes';
// import {baseUrl} from '../../config/Constants';

export const DataAction = reqData => {
  return async dispatch => {
    try {
      dispatch({
        type: DATA,
      });

      dispatch({
        type: DATA_SUCCESS,
        payload: reqData,
      });
    } catch (error) {
      dispatch({
        type: DATA_FAIL,
        payload: error,
      });
    }
  };
};
