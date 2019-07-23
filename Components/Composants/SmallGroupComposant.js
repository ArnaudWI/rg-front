import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon, Button } from "native-base";
// import des composants JS
import RemoveSmallGroupComposant from './RemoveSmallGroupComposant';
// import de redux
import {connect} from 'react-redux';
// import du socket
import io from '../Sockets/sockets';
// import de mes éléments React Navigation
import { withNavigation } from 'react-navigation';

class SmallGroupComposant extends React.Component {
  state = {
    removeSmallGroup: false,
  }

  handleRemove = () => {
    this.setState({
      removeSmallGroup: !this.state.removeSmallGroup
    });
  }

  handleUpdate = () => {
    this.props.handleUpdateSmallGroup(this.props.id, this.props.discipline, this.props.date, this.props.hour, this.props.nbrParticipants, this.props.price, this.props.programme);
    this.props.navigation.navigate('AddSmallGroup');
  }

  removeComposantParent = (none) => {
    this.setState({
      removeSmallGroup: none
    });
  }

  detailsSmallGroup = () => {
    this.props.handleReadSmallGroup(this.props.id, this.props.discipline, this.props.date, this.props.hour, this.props.nbrParticipants, this.props.price, this.props.programme, this.props.participantList);
    this.props.navigation.navigate('SmallGroupDetails')
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
          {
            this.props.user.admin ?
            <Col style={styles.colTitleIcon} onPress={this.handleUpdate}>
              <Icon name="refresh" style={styles.iconAdmin}/>
            </Col>
            :
            <Col style={styles.colTitleIcon}>
            </Col>
          }
          <Col style={styles.colTitleText}>
            <Text style={styles.title}>SG - {this.props.discipline}</Text>
          </Col>
          {
            this.props.user.admin ?
            <Col style={styles.colTitleIcon} onPress={this.handleRemove}>
              <Icon name="trash" style={styles.iconAdmin}/>
            </Col>
            :
            <Col style={styles.colTitleIcon}>
            </Col>
          }
        </Grid>

        <Grid style={styles.gridOrga}>
          <Col style={styles.colOrgaText}>
            <Text style={styles.orgaText}>Date : {this.props.date}</Text>
          </Col>
          <Col style={styles.colOrgaText}>
            <Text style={styles.orgaText}>Horaires: {this.props.hour}</Text>
          </Col>
        </Grid>

        <Grid style={styles.gridDetails}>
          <Col style={styles.colDetailsText}>
            <Text style={styles.detailsText}>Participants : {this.props.participantList.length}/{this.props.nbrParticipants}</Text>
          </Col>
          <Col style={styles.colDetailsBouton}>
            <Button style={styles.detailsBouton} onPress={this.detailsSmallGroup}>
              <Text style={styles.detailsTextBouton}>Détails</Text>
            </Button>
          </Col>
        </Grid>
        <RemoveSmallGroupComposant removeStyle={removeStyle} id={this.props.id} removeComposant={this.removeComposantParent}/>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return {
  handleUpdateSmallGroup: function(id, discipline, date, hour, nbrParticipants, price, programme) {
    dispatch({
      type: 'updateSmallGroup',
      id: id,
      discipline: discipline,
      date: date,
      hour: hour,
      nbrParticipants: nbrParticipants,
      price: price,
      programme: programme
    })
  },
  handleReadSmallGroup: function(id, discipline, date, hour, nbrParticipants, price, programme, participantList) {
    dispatch({
      type: 'readSmallGroup',
      id: id,
      discipline: discipline,
      date: date,
      hour: hour,
      nbrParticipants: nbrParticipants,
      price: price,
      programme: programme,
      participantList: participantList
    })
  }
 }
}

const mapStateToProps = state => {
  return {
    user: state.userData,
  }
}

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallGroupComposant));



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
  gridOrga: {
    height: 'auto',
    padding: 5
  },
  colOrgaText: {
    width: '50%',
    justifyContent: 'center'
  },
  orgaText: {
    color: '#fff',
    textAlign: 'center',
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
    width: '60%',
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
    width: '40%',
    justifyContent: 'center',
    marginLeft: 5
  },
  detailsBouton: {
    height: 40,
    width: 100,
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
});
