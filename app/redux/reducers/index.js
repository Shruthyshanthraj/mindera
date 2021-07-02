import {combineReducers} from 'redux';
import dataReducer from './DataReducer';

const rootReducer = combineReducers({
  DataReducer: dataReducer,
});

export default rootReducer;
