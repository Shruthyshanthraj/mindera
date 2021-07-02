import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import InputDetail from '../screens/InputDetail/InputDetail';
import AllotDone from '../screens/AllotDone/AllotDone';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="InputDetail"
          component={InputDetail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AllotDone"
          component={AllotDone}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
