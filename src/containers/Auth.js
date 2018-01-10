/*
* @Author: valentinegalkin
* @Date:   2018-01-10 01:09:54
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 23:22:48
* @flow
*/

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import Colors from '../assets/styles/colors';
import Button from '../components/Button';
import Input from '../components/Input';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isSignIn: true
    };
    this.db = props.screenProps.db;
  }

  _switchMode = () => {
    this.setState({
      isSignIn: !this.state.isSignIn
    });
  }

  _emailChanged = (text) => {
    this.setState({email: text});
  }

  _passwordChanged = (text) => {
    this.setState({password: text});
  }

  _emailAuth = () => {
    let method = this.state.isSignIn ? 'signin' : 'signup';
    if (this.state.email && this.state.password) {
      this.db.auth[method]({
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((error) => {
        console.warn(error);
      });
    }
  }

  _facebookSignin = () => {
    this.db.auth.facebook()
    .then((res) => {
      console.log('res: ', res);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  _googleSignin = () => {
    this.db.auth.google()
    .then((res) => {
      console.log('res: ', res);
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  render() {
    const buttons = [
      {
        label: this.state.isSignIn ? "SIGNIN" : "SIGNUP",
        onPress: this._emailAuth,
      },
      {
        label: "FACEBOOK",
        onPress: this._facebookSignin,
      },
      {
        label: "GOOGLE",
        onPress: this._googleSignin,
      },
      {
        label: this.state.isSignIn ? "SWITCH TO SIGNUP" : "SWITCH TO SIGNIN",
        onPress: this._switchMode,
      }
    ];

    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        <Text style={styles.mode}>
          {this.state.isSignIn ? "SIGNIN MODE" : "SIGNUP MODE"}
        </Text>
        <Input
          placeholder={"E-mail"}
          secureTextEntry={false}
          onChangeText={this._emailChanged}
          value={this.state.email}
        />
        <Input
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={this._passwordChanged}
          value={this.state.password}
        />
        {
          buttons.map((button, index) =>
            <Button
              key={index}
              label={button.label}
              onPress={button.onPress}
            />
          )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    alignItems: 'center',
  },
  mode: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  }
});
