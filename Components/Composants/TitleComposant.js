import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text } from "native-base";

export default class TitleComposant extends React.Component {
  render() {
    return (
      <Grid style={styles.grid}>
        <Col style={styles.colTiretLeft}>
          <View
            style={styles.tiret}
          />
        </Col>
        <Col style={{width: '60%'}}>
          <Text style={styles.title}>{this.props.title}</Text>
        </Col>
        <Col  style={styles.colTiretRight}>
          <View
            style={styles.tiret}
          />
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    marginTop: 20,
    marginBottom: 20
  },
  colTiretLeft: {
    marginLeft: 12
  },
  colTiretRight: {
    marginRight: 12
  },
  tiret: {
    borderBottomColor: '#E52D2F',
    borderBottomWidth: 3,
    marginTop: 15
  },
  title: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  }
});
