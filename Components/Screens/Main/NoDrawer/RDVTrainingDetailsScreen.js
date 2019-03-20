import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Text,
  Button
} from 'native-base';


export default class RDVTrainingDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>RDVTrainingDetailsScreen</Text>

            <Button danger onPress={ ()=> this.props.navigation.navigate('AddRDVTraining')}>
              <Text>Ajouter un RDV Training</Text>
            </Button>

      </View>
    );
  }
}
