import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon, Button } from "native-base";
// import des composants JS
import RemoveComAboComposant from './RemoveComAboComposant';
import ResponseComAboComposant from './ResponseComAboComposant';
// import de redux
import {connect} from 'react-redux';
// import du socket
import io from '../Sockets/sockets';
// import de mes éléments React Navigation
import { withNavigation } from 'react-navigation';
//import du seemore text
import ViewMoreText from 'react-native-view-more-text';

class ComAboComposant extends React.Component {
  state = {
    displayRemoveComAbo: false,
    displayResponseComAbo: false
  }

  handleRemove = () => {
    this.setState({
      displayRemoveComAbo: !this.state.displayRemoveComAbo
    });
  }

  handleResponse = () => {
    this.setState({
      displayResponseComAbo: !this.state.displayResponseComAbo
    });
  }

  removeComposantParent = (none) => {
    this.setState({
      displayRemoveComAbo: none
    });
  }


  renderViewMore(onPress){
    return(
      <Text style={{color: '#E52D2F', fontWeight: 'bold', textDecorationLine: 'underline', marginTop: 5}}onPress={onPress}>Voir plus...</Text>
    )
  }

  renderViewLess(onPress){
    return(
      <Text style={{color: '#E52D2F', fontWeight: 'bold', textDecorationLine: 'underline', marginTop: 5}} onPress={onPress}>Voir moins...</Text>
    )
  }

  render() {

    let removeStyle = {
      backgroundColor: 'black',
      borderColor: '#E52D2F',
      borderWidth: 1,
      width: 320,
    }

    let responseStyle = {
      backgroundColor: 'black',
      borderColor: '#E52D2F',
      borderRightWidth: 2,
      borderTopWidth: 1,
      width: 320,

    }

    if (!this.state.displayResponseComAbo) {
      responseStyle.display = 'none';
    }

    if (!this.state.displayRemoveComAbo) {
      removeStyle.display = 'none';
    }



    return (
      <View style={styles.view}>

        <Grid style={styles.gridTitle}>
          <Col style={styles.colTitleIcon} onPress={this.handleUpdate}>
            <Icon name="refresh" style={styles.iconAdmin}/>
          </Col>
          <Col style={styles.colTitleText}>
            <Text style={styles.title}>Training - MMA</Text>
          </Col>
          <Col style={styles.colTitleIcon} onPress={this.handleRemove}>
            <Icon name="trash" style={styles.iconAdmin}/>
          </Col>
        </Grid>

        <Grid style={styles.gridTraining}>
          <Text  style={styles.auteurText}>Albert propose un training :</Text>
        </Grid>

        <Grid style={styles.gridTraining}>
          <ViewMoreText
           numberOfLines={3}
           renderViewMore={this.renderViewMore}
           renderViewLess={this.renderViewLess}
           >
             <Text  style={styles.trainingText}>Hello, je suis Albert, je souhaiterais pratiquer du MMA tous les soir à partir de 17h. J'ai un niveau intermédiaire mais je souhaite m'améliorer pour du compétitif :) voila voila ! </Text>
          </ViewMoreText>
        </Grid>



        <Grid style={styles.gridDetails}>
          <Col style={styles.colDetailsText}>
            <Text style={styles.detailsText}>10 Réponses</Text>
          </Col>
          <Col style={styles.colDetailsBouton}>
            <Button style={styles.detailsBouton} onPress={this.handleResponse}>
              <Text style={styles.detailsTextBouton}>Voir les réponses</Text>
            </Button>
          </Col>
        </Grid>

        <Grid style={styles.gridDate}>
          <Text style={styles.dateText}>Ajouté le 20/04</Text>
        </Grid>
        <ResponseComAboComposant responseStyle={responseStyle}/>
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
    marginBottom: 230
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
    padding: 10
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
    width: '45%',
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
    width: '55%',
    justifyContent: 'center',
    marginLeft: 5
  },
  detailsBouton: {
    height: 40,
    width: 140,
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
