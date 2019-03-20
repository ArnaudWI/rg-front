import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Text,
  Button
} from 'native-base';


export default class ExtraSportifDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>ExtraSportifDetailsScreen</Text>

            <Button danger onPress={ ()=> this.props.navigation.navigate('AddExtraSportif')}>
              <Text>Ajouter un ExtraSportif</Text>
            </Button>

      </View>
    );
  }
}
