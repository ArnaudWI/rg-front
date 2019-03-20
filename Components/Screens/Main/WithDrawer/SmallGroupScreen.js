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


export default class SmallGroupScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="people" style={{fontSize: 20, color: tintColor}}/>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Small Group'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
          <Button danger onPress={ ()=> this.props.navigation.navigate('AddSmallGroup')}>
            <Text>Ajouter un SmallGroup</Text>
          </Button>

          <Button danger onPress={ ()=> this.props.navigation.navigate('SmallGroupDetails')}>
            <Text>Small Group Details</Text>
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
