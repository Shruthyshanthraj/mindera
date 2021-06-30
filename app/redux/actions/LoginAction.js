import {
  LOGIN_ACTIONS,
  LOGIN_ACTIONS_SUCCESS,
  LOGIN_ACTIONS_FAIL,
} from './../ActionTypes';
// import {baseUrl} from '../../config/Constants';

export const LoginAction = reqData => {
  return async dispatch => {
    try {
      dispatch({
        type: LOGIN_ACTIONS,
      });

      dispatch({
        type: LOGIN_ACTIONS_SUCCESS,
        payload: reqData,
      });
    } catch (error) {
      console.log('catch block', error);
      dispatch({
        type: LOGIN_ACTIONS_FAIL,
        payload: error,
      });
    }
  };
};
