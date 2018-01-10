/*
* @Author: valentinegalkin
* @Date:   2018-01-10 01:16:32
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 23:16:32
* @flow
*/

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

import Colors from '../assets/styles/colors';

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      placeholder,
      onChangeText,
      value,
      secureTextEntry
    } = this.props;

    return (
      <View
        style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 60,
    marginHorizontal: 30,
    marginBottom: 15,
  },
  inputWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  input: {
    width: 315,
    height: 20,
    color: Colors.darkgray,
    fontSize: 18,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  }
});
