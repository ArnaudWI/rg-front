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
          <H3>HomeScreen</H3>
          <Button danger onPress={ ()=> this.props.navigation.navigate('SignUp')}>
            <Text>Sign Up</Text>
          </Button>

          <Button danger onPress={ ()=> this.props.navigation.navigate('SignIn')}>
            <Text>Sign In</Text>
          </Button>

      </View>
    );
  }
}
