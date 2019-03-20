import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Button,
  Text,
  H3
} from 'native-base';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1,  alignSelf: 'center', justifyContent: 'center'}}>
          <H3>Sign In</H3>
          <Button danger onPress={ ()=> this.props.navigation.navigate('Accueil')}>
            <Text>Accueil</Text>
          </Button>


      </View>
    );
  }
}
