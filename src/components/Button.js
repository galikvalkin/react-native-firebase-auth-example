/*
* @Author: valentinegalkin
* @Date:   2018-01-10 01:42:42
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 23:20:44
* @flow
*/

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Colors from '../assets/styles/colors';

export default class Button extends Component {
  render() {
    const { label, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Text style={styles.label}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 5,
  },
  label: {
    color: Colors.black,
    fontSize: 18,
  },
});
