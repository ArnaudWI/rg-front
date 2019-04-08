import React from 'react';

import { Root } from "native-base";
//import de ma navigation
import Navigation from './Components/Navigation/Navigation';

// import de mes Reducers
import wodData from './Components/Reducers/wod.reducer';
import removeAnnonce from './Components/Reducers/removeannonce.reducer';
import updateAnnonce from './Components/Reducers/updateannonce.reducer';
import userData from './Components/Reducers/user.reducer';
// import de mes outils Redux
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

// Création de mon Store
const store = createStore(combineReducers({wodData, removeAnnonce, updateAnnonce, userData}));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Root>
        <Navigation/>
      </Root>
      </Provider>
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
