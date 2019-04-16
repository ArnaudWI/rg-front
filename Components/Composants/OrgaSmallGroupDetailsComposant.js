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


export default class OrgaSmallGroupDetailsComposant extends React.Component {

  render() {

    return (
            <View style={styles.viewOrga}>
              <Grid style={styles.gridOrga}>
                <Col style={styles.colOrgaIcon}>
                  <Icon name="calendar" style={styles.icon}/>
                </Col>
                <Col style={styles.colOrgaText}>
                  <Text style={styles.textDate} >Date : {this.props.date}</Text>
                </Col>
              </Grid>
              <Grid style={styles.gridOrga}>
                <Col style={styles.colOrgaIcon}>
                  <Icon name="clock" style={styles.icon}/>
                </Col>
                <Col style={styles.colOrgaText}>
                  <Text style={styles.textHeure} >Heure : {this.props.hour}</Text>
                </Col>
              </Grid>
              <Grid style={styles.gridOrga}>
                <Col style={styles.colOrgaIcon}>
                  <Icon name="logo-euro" style={styles.icon}/>
                </Col>
                <Col style={styles.colOrgaText}>
                  <Text style={styles.textPrix} >Prix : {this.props.price} €</Text>
                </Col>
              </Grid>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  viewOrga: {
    backgroundColor: 'black',
    borderColor: '#E52D2F',
    borderWidth: 1,
    marginTop: 20,
    width: 320,
    height: 'auto'
  },
  gridOrga: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colOrgaIcon: {
    width: '20%'
  },
  colOrgaText: {
    width: '80%'
  },
  textDate: {
    fontSize: 18,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'white'
  },
  textHeure: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'white'
  },
  textPrix: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    color: '#FFF',
    fontSize: 25,
  },
});
