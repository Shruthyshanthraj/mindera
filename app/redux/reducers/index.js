import {combineReducers} from 'redux';
import loginReducer from './LoginReducer';
import dataReducer from './DataReducer';

const rootReducer = combineReducers({
  LoginReducer: loginReducer,
  DataReducer: dataReducer,
});

export default rootReducer;
