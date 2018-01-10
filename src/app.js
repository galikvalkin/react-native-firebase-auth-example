/*
* @Author: valentinegalkin
* @Date:   2018-01-10 00:34:17
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 23:01:30
* @flow
*/

'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Navigator from './navigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          db={this.props.db}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
