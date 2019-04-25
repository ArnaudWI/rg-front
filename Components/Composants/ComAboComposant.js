import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon, Button } from "native-base";
// import des composants JS
import RemoveComAboComposant from './RemoveComAboComposant';
// import de redux
import {connect} from 'react-redux';
// import du socket
import io from '../Sockets/sockets';
// import de mes éléments React Navigation
import { withNavigation } from 'react-navigation';

class ComAboComposant extends React.Component {
  state = {
    removeSmallGroup: false,
  }

  handleRemove = () => {
    this.setState({
      removeSmallGroup: !this.state.removeSmallGroup
    });
  }

  removeComposantParent = (none) => {
    this.setState({
      removeSmallGroup: none
    });
  }

  render() {

    let removeStyle = {
      backgroundColor: 'black',
      borderColor: '#E52D2F',
      borderWidth: 1,
      width: 320,
    }

    if (!this.state.removeSmallGroup) {
      removeStyle.display = 'none';
    }



    return (
      <View style={styles.view}>

        <Grid style={styles.gridTitle}>
          <Col style={styles.colTitleIcon} onPress={this.handleUpdate}>
            <Icon name="refresh" style={styles.iconAdmin}/>
          </Col>
          <Col style={styles.colTitleText}>
            <Text style={styles.title}>Training</Text>
          </Col>
          <Col style={styles.colTitleIcon} onPress={this.handleRemove}>
            <Icon name="trash" style={styles.iconAdmin}/>
          </Col>
        </Grid>

        <Grid style={styles.gridTraining}>
          <Text  style={styles.auteurText}>Albert propose un training :</Text>
        </Grid>

        <Grid style={styles.gridTraining}>
          <Text  style={styles.trainingText}>Hello, je suis Albert, je souhaiterais pratiquer du MMA tous les soir à partir de 17h. J'ai un niveau intermédiaire mais je souhaite m'améliorer pour du compétitif :) voila voila ! </Text>
        </Grid>



        <Grid style={styles.gridDetails}>
          <Col style={styles.colDetailsText}>
            <Text style={styles.detailsText}>0 Réponse</Text>
          </Col>
          <Col style={styles.colDetailsBouton}>
            <Button style={styles.detailsBouton} onPress={this.detailsSmallGroup}>
              <Text style={styles.detailsTextBouton}>Voir les réponses</Text>
            </Button>
          </Col>
        </Grid>

        <Grid style={styles.gridDate}>
          <Text style={styles.dateText}>Ajouté le 20/04</Text>
        </Grid>
        <RemoveComAboComposant removeStyle={removeStyle} id={this.props.id} removeComposant={this.removeComposantParent}/>
      </View>
    );
  }
}

export default withNavigation(ComAboComposant);

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
    width: '75%',
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
  gridTraining: {
    height: 'auto',
    padding: 5
  },
  auteurText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  trainingText: {
    color: '#fff',
    padding: 5,
    fontWeight: 'bold'
  },
  gridDetails: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  colDetailsText: {
    width: '40%',
    justifyContent: 'center'
  },
  detailsText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 19
  },
  colDetailsBouton: {
    width: '60%',
    justifyContent: 'center',
    marginLeft: 5
  },
  detailsBouton: {
    height: 40,
    width: 130,
    backgroundColor: '#373737',
    borderColor: '#E52D2F',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
    alignSelf: 'center'
  },
  detailsTextBouton: {
    fontSize: 13,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
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
