import Constants from './../ActionTypes';
// import {baseUrl} from '../../config/Constants';

export const DataAction = reqData => {
  return async dispatch => {
    try {
      dispatch({
        type: Constants.DATA,
      });

      dispatch({
        type: Constants.DATA_SUCCESS,
        payload: reqData,
      });
    } catch (error) {
      dispatch({
        type: Constants.DATA_FAIL,
        payload: error,
      });
    }
  };
};
