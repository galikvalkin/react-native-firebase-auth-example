/*
* @Author: valentinegalkin
* @Date:   2018-01-10 00:47:10
* @Last Modified by:   valentinegalkin
* @Last Modified time: 2018-01-10 02:33:32
* @flow
*/

'use strict';

// config contains permission settings for google and facebook (user data fetching)
// these scopes and permissions are used for generating access tokens
// with generated tokens user personal information can be fetched


// iosClientId you will receive after you will follow 
// all instructions for `react-native-google-signin` setup
const config = {
  google: {
    iosClientId: 'YOUR-IOS-CLIENT-ID-HERE',
    scopes: [
      'https://www.googleapis.com/auth/user.addresses.read',
      'https://www.googleapis.com/auth/user.birthday.read',
      'https://www.googleapis.com/auth/user.emails.read',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/plus.login'
    ],
    forceConsentPrompt: true
  },
  fb: {
    permissions: [
      'public_profile',
      'email',
      'user_birthday',
      'user_location',
      'user_photos',
      'user_about_me'
    ]
  }
};

export default config;