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
  Toast,
  Form,
  Textarea,
  Item,
  Label,
  Input
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';
// import du socket
import io from '../../../Sockets/sockets';
// import de redux
import {connect} from 'react-redux';


class AddRDVTrainingScreen extends React.Component {
  state = {
    training: '',
    auteurTraining: ''
  };
  _isMounted = false

  componentDidMount() {
    this._isMounted = true
    let user = this.props.user.firstName + ' ' + this.props.user.lastName;
    if (this._isMounted) {
      this.setState({
        auteurTraining: user
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  handleSubmit = () => {
    let today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let hh = today.getHours();
    let min = today.getMinutes();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (hh < 10) {
      hh = '0' + hh;
    }
    if (min < 10) {
      min = '0' + min;
    }
    today = 'Ajouté le ' + dd + '/' + mm + " à " + hh + "h" + min;
    let date = String(today)
      Toast.show({
    text: "Votre Training a été ajouté !",
    type: "success"
    })
    io.emit("addRDVTraining", {auteur: this.state.auteurTraining , content: this.state.training, discipline: this.props.disciplineChoosen, date});
    this.props.navigation.navigate('RDVTrainingDetails');
  };

  render() {



    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'Proposer un Training'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Form style={styles.form}>

              <Item stackedLabel style={styles.itemTitle}>
                <Label style={styles.titleLabel} >Nom à afficher sur l'annonce :</Label>
                <Input
                  style={styles.titleInput}
                  value={this.state.auteurTraining}
                  onChangeText={(text) => this.setState({auteurTraining: text})}
                />
              </Item>

              <Textarea
                style={styles.textArea}
                rowSpan={10}
                bordered
                placeholder="Proposer un training ici, détaillez vos disponibilités, votre niveau etc.."
                onChangeText={text => this.setState({training: text})}
              />
            </Form>

            <Button style={styles.bouton} onPress={this.handleSubmit}>
              <Text style={styles.textBouton} >Valider mon RDV Training</Text>
            </Button>

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
)(AddRDVTrainingScreen);

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
    marginTop: 50
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
  },
  form: {
    width: 320,
    marginTop: 20
  }
});
