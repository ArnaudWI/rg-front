import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque react native
import {
  View,
  Text,
  Button,
  Icon,
  Container
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';
import ComAboComposant from '../../../Composants/ComAboComposant';


export default class RDVTrainingDetailsScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'RDV Training Details'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <Button style={styles.bouton} onPress={ ()=> this.props.navigation.navigate('AddRDVTraining')}>
              <Text style={styles.textBouton}>Proposer un Training</Text>
            </Button>

            <ComAboComposant/>
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
