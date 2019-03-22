import React from 'react';
//import bibliothèque react native
import {
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native';
//import bibliothèque native base
import {
  View,
  Button,
  Text
} from 'native-base';


export default class HomeScreen extends React.Component {
  render() {
    return (

      <ImageBackground style={{flex:1}} source={require("../../../public/images/img-bg.jpg")}>
      <View style={styles.view}>

      <Image source={require('../../../public/logo/logo-rg.png')} style={styles.logo}/>

          <Button style={styles.bouton1} onPress={ ()=> this.props.navigation.navigate('SignUp')}>
            <Text style={styles.textBouton} >Se connecter</Text>
          </Button>

          <Button style={styles.bouton2} onPress={ ()=> this.props.navigation.navigate('SignIn')}>
            <Text style={styles.textBouton} >S'inscrire</Text>
          </Button>

      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignSelf: 'center',
  },
  logo: {
    height: 225,
    width: 225,
    marginTop: 50
  },
  bouton2: {
    height: 50,
    width: 170,
    backgroundColor: '#E52D2F',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 30
  },
  textBouton: {
    fontSize: 18,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  bouton1: {
    height: 50,
    width: 170,
    backgroundColor: '#E52D2F',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 60
  }
})
