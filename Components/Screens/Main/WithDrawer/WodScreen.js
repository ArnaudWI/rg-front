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
import TitleComposant from '../../../Composants/TitleComposant';

export default class WodScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="pulse" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Wod de la Semaine'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Button style={styles.bouton} onPress={ ()=> this.props.navigation.navigate('ModifyWod')}>
              <Text style={styles.textBouton} >Modifier le Wod</Text>
            </Button>

            <TitleComposant title={'Wod du 26/03'}/>

            <View style={styles.viewWod}>
              <Text style={styles.textWod}>Bonjour je suis le Wod</Text>
            </View>

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
  viewWod: {
    borderColor: '#E52D2F',
    backgroundColor: 'black',
    borderWidth: 2,
    height: 500,
    width: 320,
    marginTop: 10
  },
  textWod: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10
  }
});
