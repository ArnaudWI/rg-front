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
