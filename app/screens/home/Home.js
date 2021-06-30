import React, {useEffect, useState, useRef} from 'react';

import {connect} from 'react-redux';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Animated,
  Alert,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: false,
      email: '',
      slotData: [],
      currentIndex: 0,
      // today: [
      //   {
      //     slot: 'slot1',
      //     booked: false,
      //     name: 'abcd',
      //     time: '10 - 12',
      //   },
      //   {
      //     slot: 'slot2',
      //     booked: false,
      //     name: 'abcd',
      //     time: '12 - 2',
      //   },
      //   {
      //     slot: 'slot3',
      //     booked: false,
      //     name: 'abcd',
      //     time: '2 - 4',
      //   },
      //   {
      //     slot: 'slot4',
      //     booked: false,
      //     name: 'abcd',
      //     time: '4 - 6',
      //   },
      // ],
    };
  }

  componentDidMount() {
    // console.log(this.state.slotData);
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
      <View style={{backgroundColor: '#DFEEEA', flex: 1}}>
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={[{alignItems: 'center'}]}>
            <Text>Appointment</Text>
          </View>

          <View style={[{borderWidth: 1}]}>
            <FlatList
              horizontal
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flex: 1,
                borderWidth: 3,
              }}
              data={this.state.slotData}
              renderItem={({item, index}) => {
                console.log(item);
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({currentIndex: index});
                    }}>
                    <View
                      style={[
                        {margin: 5, padding: 10},
                        index == this.state.currentIndex
                          ? {backgroundColor: 'red'}
                          : null,
                      ]}>
                      <Text>{item.name}</Text>
                      <Text>{item.date}</Text>
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
              horizontal
              contentContainerStyle={{}}
              data={
                this.state.slotData.length != 0
                  ? this.state.slotData[this.state.currentIndex].slots
                  : []
              }
              extraData={[this.state.currentIndex, this.state.slotsData]}
              renderItem={({item, index}) => {
                console.log('Inner', item);
                return (
                  <TouchableOpacity
                    onPress={async () => {
                      // console.log(
                      //   this.state.slotData[this.state.currentIndex].slots[
                      //     index
                      //   ],
                      // );
                      // return;
                      if (!item.alloted) {
                        await this.props.DataReducer.slotsData[
                          this.state.currentIndex
                        ].slots[index].allotSlot(
                          'Sanjay',
                          'SANJAY@email.com',
                          '789',
                        );
                      } else {
                        await this.props.DataReducer.slotsData[
                          this.state.currentIndex
                        ].slots[index].deAlloq1tSlot();
                      }
                      console.log('FINAL PROPS', this.props);
                      // this.forceUpdate();

                      this.setState(
                        {
                          slotData: this.props.DataReducer.slotsData,
                          currentIndex: this.state.currentIndex,
                        },
                        () => {
                          console.log('FINAL STATE', this.state);
                        },
                      );

                      // console.log(this.state.currentIndex);
                      // data[this.state.currentIndex].slots[index].allotSlot(
                      //   'Sanjay',
                      //   'SANJAY@email.com',
                      //   '789',
                      // );
                      // this.setState(
                      //   {
                      //     slotData: data,
                      //   },
                      //   () => {
                      //     console.log(data);
                      //   },
                      // );
                    }}
                    style={{
                      margin: 10,
                      borderWidth: 1,
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: item.alloted == 0 ? 'green' : 'red',
                    }}>
                    <View>
                      <Text>{item.slotName}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => {
                // console.log(item);
                return item.slotId;
              }}
            />
          </View>
        </ScrollView>
        <View style={[styles.buttonStyleView]}>
          <TouchableOpacity style={[styles.buttonStyle]}>
            <Text style={[styles.buttonText]}>
              {'Book Appointment'.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 50}}>
          <FlatList
            horizontal={true}
            renderItem={({item}) => (
              <Text
                onPress={() => alert('Booked')}
                style={{
                  color: '#000',
                  borderWidth: 1,
                  borderColor: 'blue',
                  color: 'red',
                  fontSize: 18,
                }}>
                {item.slot}
                {'\n'}
                {item.time}
              </Text>
            )}
            data={this.state.today}
          />
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
    // updateInfo : updateInfo(currentIndex,innerIndex)=>dispatch({action})
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
