/*
* @Author: valentinegalkin
* @Date:   2018-01-10 00:34:57
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 23:01:21
* @flow
*/

'use strict';

import * as firebase from 'firebase';

import Auth from './auth';

export default class DB {
  constructor(config) {
    this.connection;
    try {
      this.connection = firebase.app().database();
    }
    catch(e) {
      this.connection = firebase.initializeApp(config).database();
    }

    this.auth = new Auth();
  }
}
