import React, {Component} from 'react';

import {
  View,
  Text,
  Platform,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import Allactions from '../../redux/actions/Allactions';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      validEmail: false,
      email: '',
    };
  }
  validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({validEmail: false, email: text});

      return false;
    } else {
      this.setState({
        validEmail: true,
        email: text,
      });
    }
  };
  callLogin() {
    let body = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginAction(body);
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
    // this.props.navigation.navigate('Home', {
    //   email: this.state.email,
    // });
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
                  PLEASE LOGIN TO YOUR ACCOUNT
                </Text>
              </View>

              <View style={{padding: 20}}>
                <TextInput
                  placeholder={'Enter Email ID'}
                  style={{borderWidth: 1, height: 50, padding: 10}}
                  value={this.state.email}
                  onChangeText={email => this.validate(email)}
                />
              </View>

              <View style={{padding: 20}}>
                <TextInput
                  secureTextEntry={true}
                  placeholder={'Enter Password'}
                  style={{borderWidth: 1, height: 50, padding: 10}}
                  value={this.state.password}
                  onChangeText={password => this.setState({password: password})}
                />
              </View>

              {/* <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#0f121d',
                  borderRadius: 4,
                  paddingTop: 12,
                  paddingBottom: 12,
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 25,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}>
                <TextInput
                  keyboardType={'email-address'}
                  placeholder={'Enter Email ID'}
                  underlineColorAndroid="transparent"
                  selectionColor={'#f9ca24'}
                  placeholderTextColor={'#c6cbd3'}
                  style={{
                    fontSize: 14,
                    marginLeft: 20,
                    color: '#fff',
                    width: '100%',
                  }}
                  // value={this.state.email}
                  onChangeText={email => this.validate(email)}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#0f121d',
                  borderRadius: 4,
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 10,
                  paddingTop: 12,
                  paddingBottom: 12,
                  borderWidth: this.state.borderWidthPaswd,
                  borderColor: this.state.passwordColor,
                }}>
                <TextInput
                  secureTextEntry={true}
                  placeholder={'Enter Password'}
                  placeholderTextColor="#c6cbd3"
                  underlineColorAndroid="transparent"
                  selectionColor={'#f9ca24'}
                  style={{
                    fontSize: 14,
                    marginLeft: 20,
                    color: '#f9ca24',
                    width: '100%',
                  }}
                  value={this.state.password}
                  onChangeText={password => this.setState({password: password})}
                />
              </View>
            */}
            </View>
          </View>
        </ScrollView>

        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => {
            this.callLogin();
          }}
          style={{
            margin: 20,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            paddingTop: 12,

            paddingBottom: 12,
            backgroundColor: '#f9ca24',
          }}>
          <Text
            style={{
              color: '#393e46',
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 16,
            }}>
            LOGIN
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginAction: reqBody => dispatch(Allactions.LoginAction(reqBody)),
});

const mapStateToProps = ({LoginReducer}) => {
  const {userInfo} = LoginReducer;
  console.log(' User Info login', LoginReducer);
  return {
    userInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
