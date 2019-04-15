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
          <Button style={styles.bouton} onPress={ ()=> this.props.navigation.navigate('AddSmallGroup')}>
            <Text style={styles.textBouton} >Ajouter un SmallGroup</Text>
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
  bouton: {
    height: 60,
    width: 320,
    backgroundColor: '#E52D2F',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 20
  },
  textBouton: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
});
