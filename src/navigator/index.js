/*
* @Author: valentinegalkin
* @Date:   2018-01-10 00:40:55
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 23:06:58
* @flow
*/

'use strict';

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Auth from '../containers/Auth';

const routes = {
  Auth: {
    screen: Auth,
    navigationOptions: () => ({
      header: null
    }),
  }
};

export default class Navigator extends Component {
  _initRouter() {
    return StackNavigator(routes, this._setNavigatorConfig());
  }

  _setNavigatorConfig() {
    return {
      initialRouteName: 'Auth'
    };
  }

  render() {
    let
      screenProps = {
        db: this.props.db
      },
      Router = this._initRouter();

    return (
      <Router
        screenProps={screenProps}/>
    );
  }
}
