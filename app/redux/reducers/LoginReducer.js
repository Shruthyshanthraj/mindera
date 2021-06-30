import {
  LOGIN_ACTIONS,
  LOGIN_ACTIONS_SUCCESS,
  LOGIN_ACTIONS_FAIL,
} from './../ActionTypes';
const intialState = {
  loading: false,
  actionsLogs: null,
  errorMsg: null,
};
export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_ACTIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        actionsLogs: action.payload,
      };
    }
    case LOGIN_ACTIONS_FAIL: {
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
