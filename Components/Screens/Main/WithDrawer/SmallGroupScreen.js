import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon,
  Container,
  Form
} from 'native-base';
// import des composants JS
import HeaderMenuComposant from '../../../Composants/HeaderMenuComposant';
import SmallGroupComposant from '../../../Composants/SmallGroupComposant';
import DisciplinePickerComposant from '../../../Composants/DisciplinePickerComposant';
import DatePickerSmallGroupComposant from '../../../Composants/DatePickerSmallGroupComposant';
// import du socket
import io from '../../../Sockets/sockets';
// import de redux
import {connect} from 'react-redux';

class SmallGroupScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="people" style={{fontSize: 20, color: tintColor}}/>
    )
  }

  state = {
    smallgroupList: [],
    dateSmallGroup: undefined,
    disciplineSmallGroup: undefined
  }
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    fetch(`http://${ipAddress}:3000/smallgroup`)
    .then(response => response.json())
    .then(data => {
      if (this._isMounted) {
        this.setState({
          smallgroupList: data,
        })
      }
    }
    ).catch(error => console.error(error));
    io.on('smallgroupAdded', smallgroup => {
      if (this._isMounted) {
        this.setState({
          smallgroupList: smallgroup,
        })
      }
    });
    io.on('smallgroupRemoved', smallgroup => {
      if (this._isMounted) {
        this.setState({
          smallgroupList: smallgroup,
        })
      }
    });
    io.on('smallgroupUpdated', smallgroup => {
      if (this._isMounted) {
        this.setState({
          smallgroupList: smallgroup,
        })
      }
    });
    io.emit("readSmallGroup");
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  disciplineChoose = (discipline) => {
    this.setState({
      disciplineSmallGroup: discipline
    });
  }

  dateChoose = (date) => {
    this.setState({
      dateSmallGroup: date
    });
  }

  filterChoose = () => {
    let smallgroupListFiltred = [];
    let disciplineSave = this.state.disciplineSmallGroup;
    let dateSave = this.state.dateSmallGroup;
    io.emit("readSmallGroup");
    io.on('smallgroupReaded', smallgroup => {
      if ((disciplineSave === 'Toutes les disciplines' || disciplineSave === undefined) && (dateSave  === 'Toutes les dates'|| dateSave === undefined)) {
        if (this._isMounted) {
          this.setState({
            smallgroupList: smallgroup,
          });
        }
      } else if ((disciplineSave === 'Toutes les disciplines' || disciplineSave === undefined) && dateSave  !== 'Toutes les dates') {
        smallgroupListFiltred = smallgroup.filter(function (el) {
          return  el.date == dateSave;
        });
        if (this._isMounted) {
          this.setState({
            smallgroupList: smallgroupListFiltred,
          });
        }
      } else if (disciplineSave !== 'Toutes les disciplines' && (dateSave  === 'Toutes les dates' || dateSave === undefined)) {
        smallgroupListFiltred = smallgroup.filter(function (el) {
          return  el.discipline == disciplineSave;
        });
        if (this._isMounted) {
          this.setState({
            smallgroupList: smallgroupListFiltred,
          });
        }
      }  else {
        smallgroupListFiltred = smallgroup.filter(function (el) {
          return el.discipline == disciplineSave &&
                el.date == dateSave;
        });
        if (this._isMounted) {
          this.setState({
            smallgroupList: smallgroupListFiltred,
          });
        }
      }
    });
  }

  addSmallGroup = () => {
    this.props.handleAddSmallGroup();
    this.props.navigation.navigate('AddSmallGroup');
  }

  render() {

    let smallgroupList = this.state.smallgroupList.map((smallgroup, i) =>
      <SmallGroupComposant
      key={i}
      id={smallgroup._id}
      discipline={smallgroup.discipline}
      date={smallgroup.date}
      hour={smallgroup.hour}
      nbrParticipants={smallgroup.nbrParticipants}
      price={smallgroup.price}
      programme={smallgroup.programme}
      participantList={smallgroup.participantList}
      />);


    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Small Group'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>


          {this.props.user.admin ?
            <Button style={styles.bouton} onPress={this.addSmallGroup}>
              <Text style={styles.textBouton} >Ajouter un SmallGroup</Text>
            </Button>
            : null
          }

          <Form style={styles.form}>
            <DisciplinePickerComposant chosenDiscipline={this.disciplineChoose} placeholder="Filtrer par discipline"/>
            <DatePickerSmallGroupComposant chosenDate={this.dateChoose}/>
          </Form>

          <Button style={styles.boutonFiltre} onPress={this.filterChoose}>
            <Text style={styles.textBouton} >Je filtre ma recherche</Text>
          </Button>

          {smallgroupList.length === 0
          ? <Text style={styles.indicationWithoutSmallGroup}>Il n'y a pas de SmallGroup avec les filtres que vous avez choisi. Vous pouvez toujours utiliser des filtres différents ! :)</Text>
          : smallgroupList.reverse()}

          </ScrollView>
      </Container>

    );
  }
}

function mapDispatchToProps(dispatch) {
 return {
  handleAddSmallGroup: function() {
    dispatch({
      type: 'updateSmallGroup',
      id: undefined,
      discipline: '',
      date: '',
      hour: '',
      nbrParticipants: null,
      price: '',
      programme: ''
    })
  }
 }
}

const mapStateToProps = state => {
  return {
    user: state.userData,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallGroupScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
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
  form: {
    width: 320,
  },
  indicationWithoutSmallGroup: {
    color: 'white',
    fontSize: 20,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 320,
  },
  boutonFiltre: {
    height: 60,
    width: 320,
    backgroundColor: '#4a802a',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 20
  },
});
