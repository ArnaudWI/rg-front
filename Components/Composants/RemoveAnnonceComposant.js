import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon } from "native-base";

export default class RemoveAnnonceComposant extends React.Component {
  render() {
    return (
      <View style={this.props.removeStyle}>

        <Grid style={styles.gridRemoveQuestion}>
          <Text style={styles.removeQuestion}>Supprimer cette annonce ?</Text>
        </Grid>

        <Grid style={styles.gridRemoveButton}>
          <Col style={styles.colRemoveYesButton}>
            <Text style={styles.textYes}>Oui</Text>
          </Col>
          <Col style={styles.colRemoveNoButton}>
            <Text style={styles.textNo}>Non</Text>
          </Col>
        </Grid>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridRemoveQuestion: {
    height: 30,
    justifyContent: 'center'
  },
  removeQuestion: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5
  },
  gridRemoveButton: {
    height: 30
  },
  colRemoveYesButton: {
    justifyContent: 'center',
    backgroundColor: '#4a802a'
  },
  colRemoveNoButton: {
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  textYes: {
    color: '#fff',
    textAlign: 'center'
  },
  textNo: {
    color: '#FFF',
    alignSelf: 'center'
  },
});
