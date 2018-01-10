/*
* @Author: valentinegalkin
* @Date:   2018-01-10 00:31:40
* @Last Modified by:   Valentin
* @Last Modified time: 2018-01-10 23:32:42
* @flow
*/

import React, { Component } from 'react';
import App from './app';
import firebaseConfig from './config/firebase.config';
import DB from './db';

class Root extends Component {
  constructor(props) {
    super(props);
    this.db = new DB(firebaseConfig);
  }

  render() {
    return (
      <App
        db={this.db}
      />
    );
  }
}

export default Root;
