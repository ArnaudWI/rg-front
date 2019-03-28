import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon,
  Container
} from 'native-base';
// import des composants JS
import HeaderMenuComposant from '../../../Composants/HeaderMenuComposant';
import TitleComposant from '../../../Composants/TitleComposant';
// import des sockets côté front
import socketIOClient from "socket.io-client";
// connection avec le backend sur l'ip spécifiée ci-dessous
const io = socketIOClient('http://192.168.0.19:3000/');
// import de redux
import {connect} from 'react-redux';

class WodScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="pulse" style={{fontSize: 17, color: tintColor}}/>
    )
  }

  state = {
    wod: '',
    date: ''
  };


  componentDidMount() {
    io.emit("readWod");
    io.on('wodReaded', wod => {
        this.setState({
          wod: wod.wod,
          date: wod.date
        })
    });
    // fetch('http://192.168.0.19:3000/wod/read')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       wod: data.wod.wod,
    //       date: data.wod.date
    //     })
    //   })
    //   .catch(error => console.log('Request failed', error));
  }

  render() {

    let dateDisplay;
    if (this.props.wod.date === undefined) {
      dateDisplay = this.state.date;
    } else {
      dateDisplay = this.props.wod.date;
    }

    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Wod de la Semaine'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Button style={styles.bouton} onPress={ ()=> this.props.navigation.navigate('ModifyWod')}>
              <Text style={styles.textBouton} >Modifier le Wod</Text>
            </Button>

            <TitleComposant title={'Wod du ' + dateDisplay}/>

            <View style={styles.viewWod}>
              {this.props.wod.wod === undefined
                ? <Text style={styles.textWod}>{this.state.wod}</Text>
                : <Text style={styles.textWod}>{this.props.wod.wod}</Text>}
            </View>

          </ScrollView>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    wod: state.wodData
  };
  this.setState({
    wod: this.props.wod.wod,
    date: this.props.wod.date
  })
}

export default connect(
  mapStateToProps,
  null
)(WodScreen);

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
  viewWod: {
    borderColor: '#E52D2F',
    backgroundColor: 'black',
    borderWidth: 2,
    height: 500,
    width: 320,
    marginTop: 10
  },
  textWod: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10
  }
});
