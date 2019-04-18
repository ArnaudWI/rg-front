import React from 'react';
// import notification élément d'expo
import { Permissions, Notifications } from 'expo';
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
import AnnonceComposant from '../../../Composants/AnnonceComposant';
// import du socket
import io from '../../../Sockets/sockets';
// import de redux
import {connect} from 'react-redux';

class AccueilScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="home" style={{fontSize: 17, color: tintColor}}/>
    )
  }

  state = {
    annonceList: []
  }

  registerForPushNotificationsAsync = async() => {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;
  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') { return; }
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    // POST the token to your backend server from where you can retrieve it to send push notifications.
   fetch(`http://${ipAddress}:3000/token`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: '_id='+this.props.user.id+'&token='+token
    })
    .then(response => response.json())
    .then(data => {
      if (data) {
        console.log(data)
      }
    }).catch(error => console.error(error));
}

  componentDidMount() {
    this.registerForPushNotificationsAsync();
    fetch(`http://${ipAddress}:3000/annonce`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        annonceList: data,
      })
    }
    ).catch(error => console.error(error));
    io.on('annonceAdded', annonce => {
      this.setState({
        annonceList: annonce,
      })
    });
    io.on('annonceRemoved', annonce => {
      this.setState({
        annonceList: annonce,
      })
    });
    io.on('annonceUpdated', annonce => {
      this.setState({
        annonceList: annonce,
      })
    });
  }

  addAnnonce = () => {
    this.props.handleAddAnnonce();
    this.props.navigation.navigate('AddAnnonce');
  }

  render() {

    let annonceList = this.state.annonceList.map((annonce, i) =>
        <AnnonceComposant
        key={i}
        id={annonce._id}
        title={annonce.title}
        annonce={annonce.content}
        type={annonce.type}
        date={annonce.date}
        />
      );

    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Ring Side - Dardilly'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <Button style={styles.bouton} onPress={this.addAnnonce}>
              <Text style={styles.textBouton}>Ajouter une annonce</Text>
            </Button>

            {annonceList.reverse()}
          </ScrollView>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return {
  handleAddAnnonce: function() {
    dispatch({
      type: 'updateAnnonce',
      id: undefined,
      typeAnnonce: '',
      content: '',
      title: ''
    })
  }
 }
}

function mapStateToProps(state) {
  return {
    user: state.userData,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccueilScreen);

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
