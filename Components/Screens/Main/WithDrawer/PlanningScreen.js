import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon,
  Container
} from 'native-base';
// import des composants JS
import HeaderMenuComposant from '../../../Composants/HeaderMenuComposant';

export default class PlanningScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="calendar" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Planning'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <Text>PlanningScreen</Text>
          </ScrollView>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
  },
});
