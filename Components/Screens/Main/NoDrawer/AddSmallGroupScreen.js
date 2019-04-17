import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque react native
import {
  View,
  Text,
  Button,
  Icon,
  Container,
  Form,
  Textarea,
  Item,
  Picker,
  Label,
  Input,
  Toast,
  DatePicker
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';
import DatePickerComposant from '../../../Composants/DatePickerComposant';
import DisciplinePickerComposant from '../../../Composants/DisciplinePickerComposant';
import HourPickerComposant from '../../../Composants/HourPickerComposant';
import NbrParticipantPickerComposant from '../../../Composants/NbrParticipantPickerComposant';
// import du socket
import io from '../../../Sockets/sockets';
// import de redux
import {connect} from 'react-redux';

class AddSmallGroupScreen extends React.Component {

  state = {
    disciplineSmallGroup: undefined,
    hourSmallGroup: undefined,
    programmeSmallGroup: '',
    prixSmallGroup: '',
    nbrPartSmallGroup: undefined,
    dateSmallGroup: '',
    id: ''
  };

  componentDidMount() {
    if (this.props.updateSmallGroup) {
      this.setState({
        programmeSmallGroup: this.props.updateSmallGroup.programme,
        prixSmallGroup: this.props.updateSmallGroup.price,
        dateSmallGroup: this.props.updateSmallGroup.date,
        id: this.props.updateSmallGroup.id,
        nbrPartSmallGroup: this.props.updateSmallGroup.nbrParticipants,
        hourSmallGroup: this.props.updateSmallGroup.hour,
        disciplineSmallGroup: this.props.updateSmallGroup.discipline,
      });
    }
  }

  onHourChange(value: string) {
    this.setState({
      hourSmallGroup: value
    });
  }

  dateChoose = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    date = dd + '/' + mm + "/" + yyyy;
    let dateString = String(date)
    this.setState({
      dateSmallGroup: dateString
    });
  }

  disciplineChoose = (discipline) => {
    this.setState({
      disciplineSmallGroup: discipline
    });
  }

  hourChoose = (hour) => {
    this.setState({
      hourSmallGroup: hour
    });
  }

  nbrPartChoose = (nbr) => {
    this.setState({
      nbrPartSmallGroup: nbr
    });
  }

  handleSubmit = () => {
    if (!this.state.id) {
      io.emit("addSmallGroup", {discipline: this.state.disciplineSmallGroup, date: this.state.dateSmallGroup, hour: this.state.hourSmallGroup, nbrParticipants: this.state.nbrPartSmallGroup, price: this.state.prixSmallGroup, programme: this.state.programmeSmallGroup });
        Toast.show({
      text: "Ajout d'un smallgroup !",
      type: "success"
      })
      this.props.navigation.navigate('Small Group')
    } else if (this.state.id) {
      io.emit("updateSmallGroup", {discipline: this.state.disciplineSmallGroup, date: this.state.dateSmallGroup, hour: this.state.hourSmallGroup, nbrParticipants: this.state.nbrPartSmallGroup, price: this.state.prixSmallGroup, programme: this.state.programmeSmallGroup, id: this.state.id});
        Toast.show({
      text: "Mise à jour du smallgroup !",
      type: "success"
      })
      this.props.navigation.navigate('Small Group')
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'Ajouter un Small Group'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

          <Form style={styles.form}>

            <DisciplinePickerComposant chosenDiscipline={this.disciplineChoose} valueDiscipline={this.props.updateSmallGroup.discipline}/>

            <DatePickerComposant chosenDate={this.dateChoose} valueDate={this.props.updateSmallGroup.date}/>

            <HourPickerComposant chosenHour={this.hourChoose} valueHour={this.props.updateSmallGroup.hour}/>

            <NbrParticipantPickerComposant chosenNbrPart={this.nbrPartChoose} valueNbr={this.props.updateSmallGroup.nbrParticipants}/>

            <Item style={styles.itemTitle}>
              <Label style={styles.titleLabel} >Prix :</Label>
              <Input style={styles.titleInput} value={this.state.prixSmallGroup} onChangeText={(text) => this.setState({prixSmallGroup: text})}/>
            </Item>

            <Textarea
              value={this.state.programmeSmallGroup}
              style={styles.textArea}
              rowSpan={7}
              bordered
              placeholder="Présenter le programme du Small Group"
              onChangeText={text => this.setState({programmeSmallGroup: text})}
            />
          </Form>

            <Button style={styles.bouton}  onPress={this.handleSubmit}>
              <Text style={styles.textBouton} >Valider le Small Group</Text>
            </Button>

          </ScrollView>
      </Container>
    );
  }
}


function mapStateToProps(state) {
  return {
    updateSmallGroup: state.updateSmallGroup
  };
}

export default connect(
  mapStateToProps,
  null
)(AddSmallGroupScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
  },
  bouton: {
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
  textBouton: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
  textArea: {
    backgroundColor: 'black',
    borderColor: '#E52D2F',
    color: 'white',
    fontSize: 20,
    marginTop: 40
  },
  form: {
    width: 320,
  },
  itemTitle: {
    borderColor: '#E52D2F',
    borderBottomWidth:2,
    marginLeft: 0
  },
  titleLabel: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
  titleInput: {
    color: '#FFF',
  }
});
