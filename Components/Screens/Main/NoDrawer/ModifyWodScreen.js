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
// import des sockets côté front
import socketIOClient from "socket.io-client";
// connection avec le backend sur l'ip spécifiée ci-dessous
const io = socketIOClient('http://192.168.0.19:3000/');
// import de redux
import {connect} from 'react-redux';

class ModifyWodScreen extends React.Component {
  state = {
    wod: ''
  };

  componentDidMount() {
    io.on('wodUpdated', wod => {
        // this.setState({
        //   wod: wod.wod,
        //   date: wod.date
        // })
    });
  }

  handleSubmit = () => {
    let today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '/' + mm;
    let date = String(today)
      Toast.show({
    text: "Wod modifié !",
    type: "success"
    })
    io.emit("updateWod", this.state.wod , date, "wod");
    this.props.handleWod(this.state.wod, date);
    this.props.navigation.navigate('Wod de la semaine');
  };

  render() {

    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'Modifier le Wod'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Form>
              <Textarea
                style={styles.textArea}
                rowSpan={15}
                bordered
                placeholder="Modifier le Wod ici"
                onChangeText={text => this.setState({wod: text})}
              />
            </Form>

            <Button style={styles.bouton} onPress={this.handleSubmit}>
              <Text style={styles.textBouton} >Valider le Wod</Text>
            </Button>

          </ScrollView>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return {
  handleWod: function(wodContent, wodDate) {
    dispatch({
      type: 'wodUpdate',
      wod: wodContent,
      date: wodDate
    })
  }
 }
}

export default connect(
  null,
  mapDispatchToProps
)(ModifyWodScreen);

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
