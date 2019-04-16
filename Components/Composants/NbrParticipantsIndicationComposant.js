import React from 'react';
//import bibliothèque react native
import {StyleSheet} from 'react-native';
//import bibliothèque react native
import {
  View,
  Text,
  Icon,
  Grid,
  Col,
} from 'native-base';

export default class NbrParticipantsIndicationComposant extends React.Component {


  render() {
    return (
            <View style={styles.viewParticipants}>
              <Grid style={styles.gridParticipants}>
                <Col style={styles.colParticipantsText}>
                  <Text style={styles.textParticipants} >
                    Nombre de participants minimum : {this.props.nbrParticipantsMinimum}
                  </Text>
                </Col>
                <Col style={styles.colParticipantsIcon}>
                  <Icon name="people" style={styles.icon}/>
                </Col>
              </Grid>
                <Grid>
                  <View
                    style={styles.tiret}
                  />
                </Grid>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  tiret: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 3,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 250
  },
  viewParticipants: {
    width: 320
  },
  colParticipantsText: {
    width: '85%'
  },
  colParticipantsIcon: {
    width: '15%'
  },
  textParticipants: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  gridParticipants: {
    marginTop: 15,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  participantsTitle: {
    color: '#FFF',
    fontSize: 25,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 320,
  },
  icon: {
    color: '#FFF',
    fontSize: 25,
  },
});
