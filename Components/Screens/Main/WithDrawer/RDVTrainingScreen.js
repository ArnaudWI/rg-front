import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon
} from 'native-base';


export default class RDVTrainingScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="flash" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>RDVTrainingScreen</Text>

            <Button danger onPress={ ()=> this.props.navigation.navigate('RDVTrainingDetails')}>
              <Text>RDV Training Details</Text>
            </Button>

      </View>
    );
  }
}
