import React from 'react';
//import bibliothèque react native
import {StyleSheet} from 'react-native';
//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon
} from 'native-base';


export default class AccueilScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="home" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignSelf: 'center'}}>

            <Text>AccueilScreen</Text>

            <Button danger onPress={ ()=> this.props.navigation.navigate('AddAnnonce')}>
              <Text>Ajouter une annonce</Text>
            </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 17
  },
});
