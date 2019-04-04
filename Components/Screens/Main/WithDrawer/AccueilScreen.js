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
import AnnonceComposant from '../../../Composants/AnnonceComposant';
// import du socket
import io from '../../../Sockets/sockets';

export default class AccueilScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="home" style={{fontSize: 17, color: tintColor}}/>
    )
  }

  state = {
    annonceList: []
  }

  componentDidMount() {
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
        idAnnonce={annonce._id}
        />
      );

    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Ring Side - Dardilly'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <Button style={styles.bouton} onPress={ ()=> this.props.navigation.navigate('AddAnnonce')}>
              <Text style={styles.textBouton}>Ajouter une annonce</Text>
            </Button>

            {annonceList.reverse()}
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
