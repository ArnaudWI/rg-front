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

class SignUpScreen extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (text) => {
    fetch(`http://${ipAddress}:3000/signin?email=${this.state.email}&password=${this.state.password}`)
    .then(response => response.json())
    .then(data => {
      if (data.isUserExist) {
        this.props.handleUserValid(data.user.lastName,data.user.firstName,data.user.email, data.user._id)
        this.props.navigation.navigate('Accueil');
      } else {
        Toast.show({
          text: "Mot de passe ou identifiant erronés !",
          position: "top",
          duration: 2000
        })
      }
    }).catch(error => console.error(error));
  };

  render() {
    return (
      <ImageBackground style={{flex:1}} source={require("../../../public/images/background-3.jpg")}>

      <ScrollView style={styles.view}>

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

      </ScrollView>
      </ImageBackground>
    );
  }
}

// () => this.props.navigation.navigate('RDVTrainingDetails')

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
)(SignUpScreen);

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
