import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon } from "native-base";
// import des composants JS
import RemoveAnnonceComposant from './RemoveAnnonceComposant';

export default class AnnonceComposant extends React.Component {
  state = {
    removeAnnonce: false,
  }

  handleRemove = () => {
    this.setState({
      removeAnnonce: !this.state.removeAnnonce
    });
  }

  render() {

    let removeStyle = {
      backgroundColor: 'black',
      borderColor: '#E52D2F',
      borderWidth: 1,
      width: 320,
    }

    if (!this.state.removeAnnonce) {
      removeStyle.display = 'none';
    }

    return (
      <View style={styles.view}>

        <Grid style={styles.gridTitle}>
          <Col style={styles.colTitleIcon}>
            <Icon name="refresh" style={styles.iconAdmin}/>
          </Col>
          <Col style={styles.colTitleText}>
            <Text style={styles.title}>{this.props.title}</Text>
          </Col>
          <Col style={styles.colTitleIcon} onPress={this.handleRemove}>
            <Icon name="trash" style={styles.iconAdmin}/>
          </Col>
        </Grid>

        <Grid style={styles.gridContent}>
          <Col style={styles.colContentText}>
            <Text style={styles.contentAnnonce}>{this.props.annonce}</Text>
          </Col>
          <Col style={styles.colContentIcon}>
            <Icon name="calendar" style={styles.iconContent}/>
          </Col>
        </Grid>

        <Grid style={styles.gridDate}>
          <Text style={styles.dateText}>{this.props.date}</Text>
        </Grid>
        <RemoveAnnonceComposant removeStyle={removeStyle}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  view: {
    backgroundColor: 'black',
    borderColor: '#E52D2F',
    borderWidth: 1,
    marginTop: 20,
    width: 320,
  },
  gridTitle: {
    height: 'auto',
    padding: 5
  },
  colTitleText: {
    width: '70%',
    justifyContent: 'center'
  },
  colTitleIcon: {
    justifyContent: 'center'
  },
  iconAdmin: {
    color: '#E52D2F',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  gridContent: {
    height: 'auto',
    padding: 5
  },
  colContentText: {
    width: '80%',
    justifyContent: 'center'
  },
  colContentIcon: {
    justifyContent: 'center'
  },
  contentAnnonce: {
    color: '#fff',
    textAlign: 'center',
    padding: 5
  },
  iconContent: {
    color: '#FFF',
    alignSelf: 'center',
    fontSize: 40
  },
  gridDate: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#E52D2F',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
});
