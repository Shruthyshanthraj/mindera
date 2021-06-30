import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['DataReducer'],
  whitelist: [''],
  // blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
// const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

let persistor = persistStore(store);

export {store, persistor};
