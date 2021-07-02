import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const AllotDone = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1E6F5C',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{height: 100, width: 100}}
        source={require('../../assets/Tick.png')}
      />
      <Text
        style={{
          fontWeight: 'bold',
          paddingVertical: 20,
          fontSize: 20,
          color: '#FFFFFF',
        }}>
        Allotment has Done Successfully
      </Text>
      <View>
        <Text
          onPress={() => {
            props.navigation.popToTop();
          }}
          style={{
            color: '#FFFFFF',
            fontSize: 15,
            padding: 10,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            borderRadius: 5,
          }}>
          DONE
        </Text>
      </View>
    </View>
  );
};

export default AllotDone;
