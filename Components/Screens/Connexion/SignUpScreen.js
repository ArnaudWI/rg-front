import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Button,
  Text,
  H3
} from 'native-base';


export default class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>
        <H3>Sign Up</H3>
        <Button danger onPress={ ()=> this.props.navigation.navigate('Accueil')}>
          <Text>Accueil</Text>
        </Button>
      </View>
    );
  }
}
