/*
* @Author: valentinegalkin
* @Date:   2018-01-10 00:36:13
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 23:22:58
* @flow
*/

'use strict';

import * as firebase from 'firebase';
import { GoogleSignin } from 'react-native-google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import CONFIG from '../config/social.config';

export default class Auth {
  constructor() {
    GoogleSignin.configure(CONFIG.google);
  }

  /**
   * @param  {email: string, password: string} data
   * @return {Promise}
   */
  signup(data) {
    const { email, password } = data;
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        resolve(res);
      })
      .catch(reject);
    });
  }

  /**
   * @param  {email: string, password: string} data
   * @return {Promise}
   */
  signin(data) {
    const { email, password } = data;
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        resolve(res);
      })
      .catch(reject);
    });
  }

  /**
   * @return {Promise}
   */
  google() {
    return new Promise((resolve, reject) => {
      const user = GoogleSignin.currentUser();
      if (user) {
        GoogleSignin.signOut();
      }
      GoogleSignin.signIn()
      .then((user) => {
        let credential = firebase.auth.GoogleAuthProvider.credential(null, user.accessToken);
        firebase.auth()
        .signInWithCredential(credential)
        .then((result) => {
          resolve({
            data: result,
            google: user
          });
        })
        .catch(reject);
      })
      .catch(reject);
    });
  }

  /**
   * @return {Promise}
   */
  facebook() {
    return new Promise((resolve, reject) => {
      LoginManager
      .logInWithReadPermissions(CONFIG.fb.permissions)
      .then((response) => {
        if (response.isCancelled) {
          reject();
        }
        else {
          AccessToken
          .getCurrentAccessToken()
          .then((data) => {
            if (data.accessToken) {
              let token = data.accessToken.toString(),
                credential = firebase.auth.FacebookAuthProvider.credential(token);

              firebase.auth()
              .signInWithCredential(credential)
              .then((result) => {
                resolve({
                  data: result,
                  fb: data
                });
              })
              .catch(reject);
            }
            else {
              reject({
                error: 'No accessToken provided'
              });
            }
          });
        }
      }, reject);
    });
  }
}


