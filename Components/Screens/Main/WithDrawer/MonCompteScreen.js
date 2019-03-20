import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon
} from 'native-base';


export default class MonCompteScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="person" style={{fontSize: 17, color: tintColor}}/>
    )
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>MonCompteScreen</Text>

      </View>
    );
  }
}
