import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView, ImageBackground} from 'react-native';
//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon,
  Container,
  Form,
  Item,
  Input,
  Label,
  Toast,
  List
} from 'native-base';
// import de redux
import {connect} from 'react-redux';
// import des composants JS
import HeaderMenuComposant from '../../../Composants/HeaderMenuComposant';
import UsersListComposant from '../../../Composants/UsersListComposant';
import TitleComposant from '../../../Composants/TitleComposant';
// import du socket
import io from '../../../Sockets/sockets';


class MonCompteScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="person" style={{fontSize: 17, color: tintColor}}/>
    )
  }

  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    email: this.props.user.email,
    password: '',
    password2: '',
    usersList: []
  };
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    fetch(`http://${ipAddress}:3000/userbeforenotification`)
    .then(response => response.json())
    .then(data => {
      if (this._isMounted) {
        this.setState({
          usersList: data,
        })
      }
    }
    ).catch(error => console.error(error));
    io.on('userRemoved', data => {
      if (this._isMounted) {
        this.setState({
          usersList: data,
        })
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  updateAcount = () => {
    if (this.state.password == this.state.password2) {
      io.emit("updateUser", {id: this.props.user.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password});
      Toast.show({
        text: "Mise à jour de vos données effectuées !",
        type: "success",
        position: "top"
      })
    } else {
      Toast.show({
        text: "Les deux mots de passe ne sont pas similaires !",
        type: "danger",
        position: "top"
      })
    }
  }

  render() {
    console.log(this.props.user)

    let usersList = this.state.usersList.map((user, i) =>
      <UsersListComposant key={i}
        firstName={user.firstName} lastName={user.lastName}
        position={i + 1} id={user._id} />)

    return (
      <ImageBackground style={{flex:1}} source={require("../../../../public/images/background-3.jpg")}>
        <HeaderMenuComposant title={'Mon Compte'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Form style={styles.form}>
              <Item stackedLabel  style={styles.item}>
                <Label style={styles.label} >Prénom</Label>
                <Input value={this.state.firstName} style={styles.input} placeholder='Indiquez votre prénom' onChangeText={(text) => this.setState({firstName: text})}/>
              </Item>
              <Item stackedLabel  style={styles.item}>
                <Label style={styles.label} >Nom</Label>
                <Input value={this.state.lastName} style={styles.input} placeholder='Indiquez votre nom' onChangeText={(text) => this.setState({lastName: text})}/>
              </Item>
              <Item stackedLabel  style={styles.item}>
                <Label style={styles.label} >Email</Label>
                <Input value={this.state.email} style={styles.input} placeholder="Indiquez votre e-mail" onChangeText={(text) => this.setState({email: text})}/>
              </Item>
              <Item stackedLabel style={styles.item}>
                <Label style={styles.label} >Votre nouveau mot de passe</Label>
                <Input value={this.state.password}  style={styles.input} placeholder="Choisissez votre mot de passe" onChangeText={(text) => this.setState({password: text})}/>
              </Item>
              <Item stackedLabel style={styles.item}>
                <Label style={styles.label} >Confirmer votre mot de passe</Label>
                <Input value={this.state.password2}  style={styles.input} placeholder="Choisissez votre mot de passe" onChangeText={(text) => this.setState({password2: text})}/>
              </Item>
            </Form>

            <Button style={styles.bouton} onPress={this.updateAcount}>
              <Text style={styles.textBouton}>Mettre à jour </Text>
            </Button>

            <TitleComposant title={'Listing Adhérents'}/>
            <List style={styles.list}>
              {usersList}
            </List>
          </ScrollView>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userData,
  }
}

export default connect(
  mapStateToProps,
  null
)(MonCompteScreen);

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
  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 10,
    width: 320
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
  },
  list: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    marginTop: 20
  }
});
