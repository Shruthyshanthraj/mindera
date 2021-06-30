import React, {Component, PureComponent} from 'react';

import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import AppNavigator from './navigation/RootNavigation';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import configureStore from './redux/Store';

import {store, persistor} from './redux/Store';
export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView style={{flex: 1}}>
              <KeyboardAvoidingView style={{flex: 1}}>
                <AppNavigator />
              </KeyboardAvoidingView>
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </>
    );
  }
}
