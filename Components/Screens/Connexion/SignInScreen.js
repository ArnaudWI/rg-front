import React from 'react';
// import de l'adresse IP du backend
import ipAddress from '../../Network/network';
//import bibliothèque react native
import {
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView
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
  Toast
} from 'native-base';
// import de redux
import {connect} from 'react-redux';

class SignInScreen extends React.Component {

    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      code: ''
    };

    handleSubmit = () => {
      if (this.state.code === '1' || this.state.code === '2') {
        fetch('http://'+ipAddress+':3000/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          body: 'firstName='+this.state.firstName+'&lastName='+this.state.lastName+'&email='+this.state.email+'&password='+this.state.password+'&admin='+this.state.code
        })
        .then(response => response.json())
        .then(data => {
          if (data.user) {
            this.props.handleUserValid(data.user.lastName,data.user.firstName,data.user.email, data.user._id)
            this.props.navigation.navigate('Accueil');
          } else {
            console.log('erreur de log')
          }
        })
        .catch(error => console.error(error))
      } else {
        Toast.show({
          text: "Code Incorrect, veuillez vous renseigner à l'accueil de votre salle Ring Side",
          position: "top",
          duration: 3000
        })
      }
    };

  render() {
    return (
      <ImageBackground style={{flex:1}} source={require("../../../public/images/img-bg.jpg")}>
      <ScrollView style={styles.view}>

      <Image source={require('../../../public/logo/logo-rg.png')} style={styles.logo}/>

          <Form style={styles.form}>
            <Item stackedLabel  style={styles.item}>
              <Label style={styles.label} >Prénom</Label>
              <Input style={styles.input} placeholder='Indiquez votre prénom' onChangeText={(text) => this.setState({firstName: text})}/>
            </Item>
            <Item stackedLabel  style={styles.item}>
              <Label style={styles.label} >Nom</Label>
              <Input style={styles.input} placeholder='Indiquez votre nom' onChangeText={(text) => this.setState({lastName: text})}/>
            </Item>
            <Item stackedLabel  style={styles.item}>
              <Label style={styles.label} >Email</Label>
              <Input style={styles.input} placeholder="Indiquez votre e-mail" onChangeText={(text) => this.setState({email: text})}/>
            </Item>
            <Item stackedLabel style={styles.item}>
              <Label style={styles.label} >Mot de passe</Label>
              <Input style={styles.input} placeholder="Choisissez votre mot de passe" onChangeText={(text) => this.setState({password: text})}/>
            </Item>
            <Item stackedLabel  style={styles.item}>
              <Label style={styles.label} >Code Ring Side :</Label>
              <Input style={styles.input} placeholder="Code à obtenir à l'accueil" onChangeText={(text) => this.setState({code: text})}/>
            </Item>
          </Form>

          <Button style={styles.bouton} onPress={this.handleSubmit}>
            <Text style={styles.textBouton}>Valider mon inscription</Text>
          </Button>

      </ScrollView>
      </ImageBackground>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleUserValid: function(nameUser, firstNameUser, emailUser, idUser) {
      dispatch({
        type: 'setUserData',
        name: nameUser,
        firstName: firstNameUser,
        email: emailUser,
        id: idUser
      });
    },
  }
};

export default connect(
  null,
  mapDispatchToProps
)(SignInScreen);


const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignSelf: 'center'
  },
  logo: {
    height: 125,
    width: 125,
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
    width: 270,
    backgroundColor: '#E52D2F',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 10,
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
