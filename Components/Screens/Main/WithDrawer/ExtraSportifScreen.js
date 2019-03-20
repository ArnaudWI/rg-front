import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon
} from 'native-base';


export default class ExtraSportifScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="globe" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>ExtraSportifScreen</Text>

            <Button danger onPress={ ()=> this.props.navigation.navigate('ExtraSportifDetails')}>
              <Text>ExtraSportifDetails</Text>
            </Button>

      </View>
    );
  }
}
