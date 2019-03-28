import React from 'react';

import { Root } from "native-base";
//import de ma navigation
import Navigation from './Components/Navigation/Navigation';

// import de mes Reducers

// import de mes outils Redux

// Création de mon Store

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Navigation/>
      </Root>
      );
  }
}

// ignore YellowBox pour le soucis des websockets
// https://stackoverflow.com/questions/53638667/unrecognized-websocket-connection-options-agent-permessagedeflate-pfx
console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
