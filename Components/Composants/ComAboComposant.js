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
    displayResponseComAbo: false,
    numberOfResponses: this.props.responseList.length,
  }
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  NumberofResponses = responseListLength => {
    if (this._isMounted) {
      this.setState({
        numberOfResponses: responseListLength,
      });
    }
  }

  handleRemove = () => {
    if (this._isMounted) {
      this.setState({
        displayRemoveComAbo: !this.state.displayRemoveComAbo
      });
    }
  }

  handleResponse = () => {
    if (this._isMounted) {
      this.setState({
        displayResponseComAbo: !this.state.displayResponseComAbo
      });
    }
  }

  removeComposantParent = (none) => {
    if (this._isMounted) {
      this.setState({
        displayRemoveComAbo: none
      });
    }
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

    let categoryLabel;

    if (this.props.disciplineChoosen === 'Networking' || this.props.disciplineChoosen === 'Loisirs' || this.props.disciplineChoosen === 'Ventes et Achats') {
      categoryLabel = 'Extra Sportif';
    } else {
      categoryLabel = 'Training';
    }

    return (
      <View style={styles.view}>

        <Grid style={styles.gridTitle}>
          <Col style={styles.colTitleIcon} onPress={this.handleUpdate}>
            <Icon name="refresh" style={styles.iconAdmin}/>
          </Col>
          <Col style={styles.colTitleText}>
            <Text style={styles.title}>{categoryLabel} - {this.props.discipline}</Text>
          </Col>
          <Col style={styles.colTitleIcon} onPress={this.handleRemove}>
            <Icon name="trash" style={styles.iconAdmin}/>
          </Col>
        </Grid>

        <Grid style={styles.gridTraining}>
          <Text  style={styles.auteurText}>{this.props.auteur} propose un training :</Text>
        </Grid>

        <Grid style={styles.gridTraining}>
          <ViewMoreText
           numberOfLines={3}
           renderViewMore={this.renderViewMore}
           renderViewLess={this.renderViewLess}
          >
             <Text  style={styles.trainingText}>{this.props.content}</Text>
          </ViewMoreText>
        </Grid>



        <Grid style={styles.gridDetails}>
          <Col style={styles.colDetailsText}>
            <Text style={styles.detailsText}>{this.state.numberOfResponses} {this.state.numberOfResponses < 2 ? 'Réponse' : 'Réponses'}</Text>
          </Col>
          <Col style={styles.colDetailsBouton}>
            <Button style={styles.detailsBouton} onPress={this.handleResponse}>
              <Text style={styles.detailsTextBouton}>Voir les réponses</Text>
            </Button>
          </Col>
        </Grid>

        <Grid style={styles.gridDate}>
          <Text style={styles.dateText}>{this.props.date}</Text>
        </Grid>
        <ResponseComAboComposant
          responseStyle={responseStyle}
          id={this.props.id}
          responseList={this.props.responseList}
          NumberofResponses={this.NumberofResponses}
        />
        <RemoveComAboComposant removeStyle={removeStyle} id={this.props.id} removeComposant={this.removeComposantParent}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    disciplineChoosen: state.disciplineChoosen
  };
}

export default withNavigation(connect(
  mapStateToProps,
  null
)(ComAboComposant));


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
