import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon } from "native-base";
// import du socket
import io from '../Sockets/sockets';

export default class RemoveComAboComposant extends React.Component {

  state = {
    displayNone: undefined,
  }

  removeYes = () => {
    io.emit("removeSmallGroup", this.props.id);
    this.setState({
      displayNone: false
    });
    this.props.removeComposant(this.state.displayNone)
  }


  render() {
    return (
      <View style={this.props.removeStyle}>

        <Grid style={styles.gridRemoveQuestion}>
          <Text style={styles.removeQuestion}>Supprimer ce SmallGroup ?</Text>
        </Grid>

        <Grid style={styles.gridRemoveButton}>
          <Col style={styles.colRemoveYesButton} onPress={this.removeYes} >
            <Text style={styles.textYes}>Oui</Text>
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
  textYes: {
    color: '#fff',
    textAlign: 'center'
  },
});
