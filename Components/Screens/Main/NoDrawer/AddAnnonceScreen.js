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
  Toast
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';
// import du socket
import io from '../../../Sockets/sockets';

export default class AddAnnonceScreen extends React.Component {

  state = {
    typeSelected: undefined,
    annonceTitle: '',
    annonceContent: ''
  };

  onTypeChange(value: string) {
    this.setState({
      typeSelected: value
    });
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
    today = dd + '/' + mm + " à " + hh + "h" + min;
    let date = String(today)
      Toast.show({
    text: "Annonce ajoutée !",
    type: "success"
    })
    io.emit("addAnnonce", {title: this.state.annonceTitle , content: this.state.annonceContent, type: this.state.typeSelected, date});
    this.props.navigation.navigate('Accueil')
  };

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'Ajouter une Annonce'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Form style={styles.form}>

              <Item stackedLabel style={styles.itemTitle}>
                <Label style={styles.titleLabel} >Titre de l'annonce:</Label>
                <Input style={styles.titleInput} onChangeText={(text) => this.setState({annonceTitle: text})}/>
              </Item>

              <Item picker style={styles.itemPicker}>
                <Label style={styles.label}>Type d'annonce:</Label>
                <Picker
                  modalStyle={{backgroundColor: '#373737'}}
                  headerStyle={{backgroundColor: 'black', borderColor: '#fff', borderBottomWidth: 1}}
                  iosHeader="Type d'Annonce"
                  headerBackButtonText={<Icon name="arrow-back" style={styles.icon} />}
                  headerTitleStyle={{color: '#fff', width: 250}}
                  itemStyle={{backgroundColor: '#373737'}}
                  itemTextStyle={{color: '#fff'}}
                  mode="dropdown"
                  style={{ width: undefined}}
                  placeholder="Sélection"
                  placeholderStyle={{ color: "grey", paddingLeft: 100}}
                  textStyle={{color: 'white', paddingLeft: 80}}
                  placeholderIconColor="#fff"
                  selectedValue={this.state.typeSelected}
                  onValueChange={this.onTypeChange.bind(this)}
                >
                  <Picker.Item label="Normale" value="normale" />
                  <Picker.Item label="Evenement" value="evenement" />
                  <Picker.Item label="Alerte" value="alerte" />
                </Picker>
              </Item>

              <Textarea
                style={styles.textArea}
                rowSpan={10}
                bordered
                placeholder="Ajouter une Annonce ici"
                onChangeText={text => this.setState({annonceContent: text})}
              />
            </Form>

            <Button style={styles.bouton}  onPress={this.handleSubmit}>
              <Text style={styles.textBouton} >Valider mon Annonce</Text>
            </Button>

          </ScrollView>
      </Container>
    );
  }
}

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
  label: {
    fontWeight: 'bold',
    color: "#fff"
  },
  itemPicker: {
    borderColor: '#E52D2F',
    borderBottomWidth:2,
  },
  icon: {
    color: '#E52D2F',
    marginBottom: 5
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
