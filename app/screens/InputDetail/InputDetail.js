import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import Allactions from '../../redux/actions/Allactions';
import Constants from '../../redux/ActionTypes';
import {connect} from 'react-redux';

class InputDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: null,
      phone: null,
      userName: null,
    };
  }

  componentDidMount() {
    console.log('Data from previous\n', this.props.route.params);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{padding: 20}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    color: '#000',
                    fontSize: 16,
                  }}>
                  PLEASE ENTER FOLLOWING INFORMATION
                </Text>
              </View>

              <View style={{padding: 20}}>
                <TextInput
                  placeholder={'Enter Name'}
                  style={{borderWidth: 1, height: 50, padding: 10}}
                  value={this.state.userName}
                  onChangeText={userName => this.setState({userName: userName})}
                />
              </View>

              <View style={{padding: 20}}>
                <TextInput
                  placeholder={'Enter Email ID'}
                  style={{borderWidth: 1, height: 50, padding: 10}}
                  value={this.state.email}
                  onChangeText={email => this.setState({mail: email})}
                />
              </View>

              <View style={{padding: 20}}>
                <TextInput
                  placeholder={'Enter Phone Number'}
                  style={{borderWidth: 1, height: 50, padding: 10}}
                  value={this.state.phone}
                  keyboardType={'numeric'}
                  onChangeText={phone => this.setState({phone: phone})}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableHighlight
          style={[styles.buttonStyle, {margin: 20}]}
          underlayColor={'transparent'}
          onPress={async () => {
            console.log(this.props.route.params);

            if (
              this.state.userName == null ||
              this.state.userName.trim().length < 1
            ) {
              Alert.alert('', 'Please Enter Valid Name');
            } else if (
              this.state.mail == null ||
              this.state.mail.trim().length < 1 ||
              !this.validateEmail(this.state.mail)
            ) {
              Alert.alert('', 'Please Enter valid Email ID');
            } else if (
              this.state.phone == null ||
              this.state.phone.trim().length < 1 ||
              !/^\d{10}$/.test(this.state.phone)
            ) {
              Alert.alert('', 'Please Enter Valid Phone Number');
            } else {
              await this.props.AllotSlot({
                current: this.props.route.params.currentIndex,
                inner: this.props.route.params.slotId - 1,
                name: this.state.userName,
                mail: this.state.mail,
                phone: this.state.phone,
              });
              this.props.navigation.replace('AllotDone');
            }
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            SUBMIT
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(re.test(email));
    return re.test(email);
  };
}

const mapStateToProps = reducer => {
  const {LoginReducer, DataReducer} = reducer;
  return {LoginReducer, DataReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    AllotSlot: params =>
      dispatch({type: Constants.ALLOT_ACTIONS_SUCCESS, payload: params}),
    // updateInfo : updateInfo(currentIndex,slotId)=>dispatch({action})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputDetail);

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
