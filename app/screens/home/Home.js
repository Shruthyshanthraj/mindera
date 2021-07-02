import React, {useEffect, useState, useRef} from 'react';

import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
  FlatList,
} from 'react-native';

import Allactions from '../../redux/actions/Allactions';
import Constants from '../../redux/ActionTypes';
import CheckBox from '@react-native-community/checkbox';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      slotData: [],
      currentIndex: 0,
      slotId: null,
    };
  }

  componentDidMount() {
    this.setState({
      slotData: this.props.DataReducer.slotsData,
    });
  }
  render() {
    console.log(
      'CCCC',
      this.state.slotData.length != 0
        ? this.state.slotData[this.state.currentIndex]
        : [],
    );
    return (
      <View
        style={{
          backgroundColor: '#DFEEEA',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={[{alignItems: 'center'}]}>
            <Text style={{padding: 15, fontSize: 20, fontWeight: 'bold'}}>
              Appointment
            </Text>
          </View>

          <View style={[{}]}>
            <FlatList
              horizontal
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flex: 1,
                borderWidth: 1,
              }}
              data={this.state.slotData}
              renderItem={({item, index}) => {
                console.log(item);
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({currentIndex: index, slotId: null});
                    }}>
                    <View
                      style={[
                        {margin: 5, padding: 10, borderRadius: 10},
                        index == this.state.currentIndex
                          ? {backgroundColor: '#2F5D62'}
                          : {backgroundColor: '#A7C4BC'},
                      ]}>
                      <Text
                        style={{
                          color:
                            index == this.state.currentIndex
                              ? '#FFFFFF'
                              : '#000000',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color:
                            index == this.state.currentIndex
                              ? '#FFFFFF'
                              : '#000000',
                        }}>
                        {item.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => {
                // console.log(item);
                return item.dateId;
              }}
            />
            <FlatList
              data={
                this.state.slotData.length != 0
                  ? this.state.slotData[this.state.currentIndex].slots
                  : []
              }
              extraData={[this.state.currentIndex, this.state.slotsData]}
              renderItem={({item, index}) => {
                console.log('Inner', item);
                return (
                  <View
                    style={{
                      padding: 15,
                      marginHorizontal: 15,
                      marginVertical: 10,

                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 5,
                      borderRadius: 5,
                      backgroundColor:
                        item.alloted == true
                          ? '#29BB89'
                          : this.state.slotId === item.slotId
                          ? '#E6DD3B'
                          : '#FFFFFF',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text>Time :{item.slotName}</Text>
                      </View>
                      <View>
                        {!item.alloted ? (
                          <CheckBox
                            value={this.state.slotId === item.slotId}
                            onValueChange={newValue =>
                              this.setState({
                                slotId: newValue ? item.slotId : null,
                              })
                            }
                          />
                        ) : (
                          <TouchableOpacity
                            onPress={() => {
                              Alert.alert(
                                '',
                                'Are you sure want delete appointment?',
                                [
                                  {
                                    text: 'Cancel',
                                    onPress: () =>
                                      console.log('Cancel Pressed'),
                                    style: 'cancel',
                                  },
                                  {
                                    text: 'Delete',
                                    onPress: () =>
                                      this.props.DeAllotSlot({
                                        current: this.state.currentIndex,
                                        inner: item.slotId - 1,
                                      }),
                                  },
                                ],
                              );
                            }}
                            activeOpacity={0.8}>
                            <Image
                              style={{height: 30, width: 30}}
                              source={require('../../assets/Remove.png')}
                            />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    {item.alloted && (
                      <View style={{paddingTop: 10}}>
                        <Text>Email: {item.mail}</Text>
                        <Text style={{paddingVertical: 5}}>
                          Name: {item.name}
                        </Text>
                        <Text>Ph No: {item.phone}</Text>
                      </View>
                    )}
                  </View>
                );
              }}
              keyExtractor={item => {
                // console.log(item);
                return item.slotId;
              }}
            />
          </View>
        </View>
        <View style={[styles.buttonStyleView]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('InputDetail', {...this.state});
            }}
            disabled={this.state.slotId == null}
            style={[
              styles.buttonStyle,
              this.state.slotId != null ? {} : {backgroundColor: 'grey'},
            ]}>
            <Text style={[styles.buttonText]}>
              {'Book Appointment'.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = reducer => {
  const {LoginReducer, DataReducer} = reducer;
  return {LoginReducer, DataReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    DeAllotSlot: params =>
      dispatch({type: Constants.ALLOT_ACTIONS_FAIL, payload: params}),
    // updateInfo : updateInfo(currentIndex,slotId)=>dispatch({action})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  buttonStyleView: {
    padding: 15,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#2F5D62',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  mainView: {
    backgroundColor: '#DFEEEA',
    flex: 1,
  },
});
