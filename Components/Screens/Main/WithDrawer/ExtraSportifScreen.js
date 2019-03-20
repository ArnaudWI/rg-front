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

export default class ExtraSportifScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="globe" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Extra Sportif'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <Button danger onPress={ ()=> this.props.navigation.navigate('ExtraSportifDetails')}>
              <Text>ExtraSportifDetails</Text>
            </Button>
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
