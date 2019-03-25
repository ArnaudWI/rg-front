import React, { Component } from 'react';
//import bibliothèque react native
import {StyleSheet, Image } from 'react-native';
//import bibliothèque native base
import {View, Grid, Col, Text, Icon } from 'native-base';
//import de mes Tabs

export default class TabMMAKidsComponent extends Component {
  render() {

    const coursData = [
      {
        date: 'mercredi',
        horaire: '14h30 - 15h30'
      },
      {
        date: 'samedi',
        horaire: '11h00 - 12h00'
      }
    ]

    let CoursList = coursData.map((cours, i) => {
      return  <CoursComponent key={i} position={i + 1} date={cours.date} horaire={cours.horaire}/>
    });

    return (
      <View style={styles.viewContainer}>
          {CoursList}
      </View>
    );
  }
}

class CoursComponent extends Component {
  render() {
    return (
        <View style={styles.viewTab}>
          <Grid>
            <Col style={{width: '10%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.num}>{this.props.position}.</Text>
            </Col>
            <Col style={{width: '35%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.date}>{this.props.date}</Text>
            </Col>
            <Col style={{width: '35%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.horaire}>{this.props.horaire}</Text>
            </Col>
            <Col style={{width: '20%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={styles.image}
                     source={require("../../public/images/kid-150x150.png")}/>
            </Col>
          </Grid>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#373737'
  },
  viewTab: {
    backgroundColor: 'black',
    height: 70,
    width: 350,
    alignSelf: 'center',
    borderColor: '#E52D2F',
    borderWidth: 1,
    marginTop: 15
  },
  num: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  date: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  horaire: {
    color: 'white',
    fontWeight: 'bold'
  },
  image: {
    width:40,
    height: 40
  }
});
