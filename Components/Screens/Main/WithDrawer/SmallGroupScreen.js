import React from 'react';
//import bibliothèque react native

//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon
} from 'native-base';


export default class SmallGroupScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="people" style={{fontSize: 20, color: tintColor}}/>
    )
  }
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>SmallGroupScreen</Text>

            <Button danger onPress={ ()=> this.props.navigation.navigate('AddSmallGroup')}>
              <Text>Ajouter un SmallGroup</Text>
            </Button>

            <Button danger onPress={ ()=> this.props.navigation.navigate('SmallGroupDetails')}>
              <Text>Small Group Details</Text>
            </Button>

      </View>
    );
  }
}
