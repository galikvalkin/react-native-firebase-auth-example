# React Native Firebase Auth Example

## Overview

Simple application with Firebase Auth

![FirebaseAuth]

## Installation

1. Clone repository
2. Setup your firebase project correctly (https://firebase.google.com/docs/web/setup) and set your firebase settings to `./config/firebase.config.js` file; 
3. Configure https://github.com/facebook/react-native-fbsdk package for your requirements
4. Configure https://github.com/devfd/react-native-google-signin package for your requirements and set `iosClientId` from your GoogleInfo.plist file to `./config/social.config.js`


## Implemented auth methods:

| Name           | Description  |
| ---------------|:------------:|
| signup         | E-mail/password signup |
| signin         | E-mail/password signin |
| google         | Google auth. Please - configure https://github.com/devfd/react-native-google-signin correctly for your firebase project |
| facebook         | Facebook auth. Please - configure https://github.com/facebook/react-native-fbsdk correctly for your firebase project |

# WARNING!

Please configure correctly these two packages according to their instructions:

https://github.com/facebook/react-native-fbsdk

https://github.com/devfd/react-native-google-signin

## License

MIT
