import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque react native
import {
  View,
  Text,
  Button,
  Icon,
  Container
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';
import ComAboComposant from '../../../Composants/ComAboComposant';
// import du socket
import io from '../../../Sockets/sockets';
// import de redux
import {connect} from 'react-redux';

class RDVTrainingDetailsScreen extends React.Component {

  state = {
    rdvtrainingList: [],
  }
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    fetch(`http://${ipAddress}:3000/rdvtraining`)
    .then(response => response.json())
    .then(data => {
      let rdvtrainingListFiltred = [];
      let disciplineFilter = this.props.disciplineChoosen
      rdvtrainingListFiltred = data.filter(function (el) {
        return el.discipline == disciplineFilter;
      })
      if (this._isMounted) {
        this.setState({
          rdvtrainingList: rdvtrainingListFiltred,
        });
      }
    }
    ).catch(error => console.error(error));
    io.on('rdvtrainingAdded', rdvtraining => {
      let rdvtrainingListFiltred = [];
      let disciplineFilter = this.props.disciplineChoosen
      rdvtrainingListFiltred = rdvtraining.filter(function (el) {
        return el.discipline == disciplineFilter;
      })
      if (this._isMounted) {
        this.setState({
          rdvtrainingList: rdvtrainingListFiltred,
        });
      }
    });
    io.on('rdvtrainingRemoved', rdvtraining => {
      let rdvtrainingListFiltred = [];
      let disciplineFilter = this.props.disciplineChoosen
      rdvtrainingListFiltred = rdvtraining.filter(function (el) {
        return el.discipline == disciplineFilter;
      })
      if (this._isMounted) {
        this.setState({
          rdvtrainingList: rdvtrainingListFiltred,
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {

    let rdvtrainingList = this.state.rdvtrainingList.map((rdvtraining, i) =>
      <ComAboComposant
      key={i}
      id={rdvtraining._id}
      discipline={rdvtraining.discipline}
      date={rdvtraining.date}
      auteur={rdvtraining.auteur}
      content={rdvtraining.content}
      responseList={rdvtraining.responseList}
      />);

    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'Training - ' + this.props.disciplineChoosen}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <Button style={styles.bouton} onPress={ ()=> this.props.navigation.navigate('AddRDVTraining')}>
              <Text style={styles.textBouton}>Proposer un Training</Text>
            </Button>


            {rdvtrainingList.length === 0
            ? <Text style={styles.indicationWithoutRDVTraining}>Il n'y a pas de RDV Training dans la discipline {this.props.disciplineChoosen}, cependant vous pouvez en proposer pour que tous les adhérents Ring Side Dardilly sachent que vous recherchez un partenaire de training ! :)</Text>
            : rdvtrainingList.reverse()}

            <View style={styles.espace}></View>
          </ScrollView>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userData,
    disciplineChoosen: state.disciplineChoosen
  };
}

export default connect(
  mapStateToProps,
  null
)(RDVTrainingDetailsScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
  },
  espace: {
    height: 220
  },
  bouton: {
    height: 60,
    width: 320,
    backgroundColor: '#E52D2F',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 20
  },
  textBouton: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
  indicationWithoutRDVTraining: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 320,
  },
});
