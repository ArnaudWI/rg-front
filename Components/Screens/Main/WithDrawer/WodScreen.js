import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon
} from 'native-base';


export default class WodScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="pulse" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>WodScreen</Text>

            <Button danger onPress={ ()=> this.props.navigation.navigate('ModifyWod')}>
              <Text>Modifier le Wod</Text>
            </Button>

      </View>
    );
  }
}
