import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon } from "native-base";
// import du socket
import io from '../Sockets/sockets';


export default class ResponseComposant extends React.Component {

  state = {
    displayNone: undefined,
  }



  render() {
    return (
      <View style={styles.responseBlock}>

        <Grid style={styles.gridResponseAuteur}>
            <Text style={styles.responseAuteurName}>{this.props.responseAuteur} :</Text>
        </Grid>

        <Grid style={styles.gridResponseText}>
            <Text style={styles.responseText}>{this.props.responseContent}</Text>
        </Grid>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  responseBlock: {
    width: 300,
    backgroundColor: '#373737',
    borderColor: '#FFF',
    borderWidth: 1,
    height: 'auto',
    margin: 5,
    alignSelf: 'center',
    paddingBottom: 3
  },
  gridResponseAuteur: {
    margin: 5,
  },
  responseAuteurName: {
    color: '#E52D2F',
    fontWeight: 'bold',
    fontSize: 15,
  },
  gridResponseText: {
    margin: 5,
  },
  responseText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
