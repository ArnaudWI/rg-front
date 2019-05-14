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

class ExtraSportifScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="globe" style={{fontSize: 17, color: tintColor}}/>
    )
  }

  handleClickOnNetworking = () => {
    this.props.handleDisciplineChoosen('Networking')
    this.props.navigation.navigate('RDVTrainingDetails')
  }

  handleClickOnLoisirs = () => {
    this.props.handleDisciplineChoosen('Loisirs')
    this.props.navigation.navigate('RDVTrainingDetails')
  }

  handleClickOnVentes = () => {
    this.props.handleDisciplineChoosen('Ventes et Achats')
    this.props.navigation.navigate('RDVTrainingDetails')
  }

  render() {
    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Extra Sportif'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

            <Grid style={styles.grid}>
              <Col style={styles.col}>
                <TouchableOpacity onPress={this.handleClickOnNetworking}>
                  <Image style={styles.image}
                         source={require("../../../../public/images/boxeanglaise-150x150.png")}/>
                </TouchableOpacity>
                  <Text style={styles.disciplineText}>Networking</Text>
              </Col>
            </Grid>

            <Grid style={styles.grid}>
              <Col style={styles.col}>
                <TouchableOpacity onPress={this.handleClickOnLoisirs}>
                  <Image style={styles.image}
                         source={require("../../../../public/images/mma-150x150.png")}/>
                </TouchableOpacity>
                  <Text style={styles.disciplineText}>Loisirs</Text>
              </Col>
            </Grid>

            <Grid style={styles.grid}>
              <Col style={styles.col}>
                <TouchableOpacity onPress={this.handleClickOnVentes}>
                  <Image style={styles.image}
                         source={require("../../../../public/images/mma-150x150.png")}/>
                </TouchableOpacity>
                  <Text style={styles.disciplineText}>Ventes et Achats</Text>
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
)(ExtraSportifScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
  },
  grid: {
    marginTop: 30,
    width: 320,
  },
  col: {
    width: '100%'
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
