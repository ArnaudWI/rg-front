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
  Textarea
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';



export default class ModifyWodScreen extends React.Component {

  handleSubmit = () => {
    let today = new Date()
    console.log(today)
    let dd = today.getDate();
    var mm = today.getMonth() + 1;
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '/' + mm;
    console.log(today)
      Toast.show({
    text: "Wod modifié !",
    type: "success"
    })
    this.props.navigation.navigate('Wod de la semaine');
  };

  render() {

    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'Modifier le Wod'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Form>
              <Textarea style={styles.textArea} rowSpan={15} bordered placeholder="Modifier le Wod ici" />
            </Form>

            <Button style={styles.bouton} onPress={this.handleSubmit}>
              <Text style={styles.textBouton} >Valider le Wod</Text>
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
  }
});
