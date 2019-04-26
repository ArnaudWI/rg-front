import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
//import bibliothèque native base
import {
  View,
  Text,
  Button,
  Icon,
  Grid,
  Col,
  Container
} from 'native-base';
// import des composants JS
import HeaderMenuComposant from '../../../Composants/HeaderMenuComposant';
// import du socket
import io from '../../../Sockets/sockets';
// import de redux
import {connect} from 'react-redux';

class RDVTrainingScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="flash" style={{fontSize: 17, color: tintColor}}/>
    )
  }


  handleClickOnBoxeAnglaise = () => {
    this.props.handleDisciplineChoosen('Boxe Anglaise')
    this.props.navigation.navigate('RDVTrainingDetails')
  }

  handleClickOnMuayThaï = () => {
    this.props.handleDisciplineChoosen('Muay Thaï')
    this.props.navigation.navigate('RDVTrainingDetails')
  }

  handleClickOnMMA = () => {
    this.props.handleDisciplineChoosen('MMA & Grapping')
    this.props.navigation.navigate('RDVTrainingDetails')
  }

  handleClickOnConditioning = () => {
    this.props.handleDisciplineChoosen('Conditioning')
    this.props.navigation.navigate('RDVTrainingDetails')
  }


  render() {
    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'RDV Training'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Grid style={styles.grid}>
              <Col style={styles.col}>
                <TouchableOpacity onPress={this.handleClickOnBoxeAnglaise}>
                  <Image style={styles.image}
                         source={require("../../../../public/images/boxeanglaise-150x150.png")}/>
                </TouchableOpacity>
                  <Text style={styles.disciplineText}>Boxe Anglaise</Text>

              </Col>
              <Col style={styles.col}>
              <TouchableOpacity onPress={this.handleClickOnMuayThaï}>
                <Image style={styles.image}
                       source={require("../../../../public/images/muaythai-150x150.png")}/>
              </TouchableOpacity>
                <Text style={styles.disciplineText}>Muay Thaï</Text>
              </Col>
            </Grid>

            <Grid style={styles.grid}>
              <Col style={styles.col}>
                <TouchableOpacity onPress={this.handleClickOnMMA}>
                  <Image style={styles.image}
                         source={require("../../../../public/images/mma-150x150.png")}/>
                </TouchableOpacity>
                  <Text style={styles.disciplineText}>MMA & Grapping</Text>

              </Col>
              <Col style={styles.col}>
              <TouchableOpacity onPress={this.handleClickOnConditioning}>
                <Image style={styles.image}
                       source={require("../../../../public/images/conditioning-150x150.png")}/>
              </TouchableOpacity>
                <Text style={styles.disciplineText}>Conditioning</Text>
              </Col>
            </Grid>

          </ScrollView>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
 return {
  handleDisciplineChoosen: function(disciplineChoosen) {
    dispatch({
      type: 'disciplineChoosen',
      disciplineChoosen: disciplineChoosen
    })
  }
 }
}

function mapStateToProps(state) {
  return {
    user: state.userData,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RDVTrainingScreen);


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
  },
  grid: {
    marginTop: 50,
    width: 320,
  },
  col: {
    width: '50%'
  },
  image: {
    width: 125,
    height: 125,
    alignSelf: 'center'
  },
  disciplineText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 10
  }
});
