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
  Text,
  Form,
  Item,
  Input,
  Label,
  Icon
} from 'native-base';


export default class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (text) => {
    fetch(`http://192.168.0.19:3000/signin?email=${this.state.email}&password=${this.state.password}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.isUserExist) {
        this.setState({error: null});
        this.props.navigation.navigate('Accueil');
      } else {
        this.setState({error: "l'identifiant ou/et le mot de passe sont incorrects"});
      }
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <ImageBackground style={{flex:1}} source={require("../../../public/images/img-bg.jpg")}>

      <View style={styles.view}>

        <Image source={require('../../../public/logo/logo-rg.png')} style={styles.logo}/>

        <Form style={styles.form}>
          <Item success floatingLabel style={styles.item}>
            <Label style={styles.label} >Email</Label>
            <Input style={styles.input} onChangeText={text => this.setState({email: text})}/>
          </Item>
          <Item floatingLabel style={styles.item}>
            <Label style={styles.label} >Mot de passe</Label>
            <Input style={styles.input} onChangeText={text => this.setState({password: text})}/>
          </Item>
        </Form>

        <Button style={styles.bouton} onPress={this.handleSubmit}>
          <Text style={styles.textBouton}>Connexion</Text>
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
    marginTop: 50,
    alignSelf: 'center'
  },
  textBouton: {
    fontSize: 18,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  bouton: {
    height: 50,
    width: 170,
    backgroundColor: '#E52D2F',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 10
  },
  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 10,
    width: 300
  },
  item: {
    borderColor: '#E52D2F'
  },
  label: {
    color: '#E52D2F',
    fontWeight: 'bold'
  },
  input: {
    color: '#E52D2F',
    fontWeight: 'bold'
  }
})
