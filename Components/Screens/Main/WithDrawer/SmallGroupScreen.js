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
import SmallGroupComposant from '../../../Composants/SmallGroupComposant';
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
    smallgroupList: []
  }

  componentDidMount() {
    fetch(`http://${ipAddress}:3000/smallgroup`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        smallgroupList: data,
      })
      console.log(this.state.smallgroupList[0].participantList.length)
    }
    ).catch(error => console.error(error));
    io.on('smallgroupAdded', smallgroup => {
      this.setState({
        smallgroupList: smallgroup,
      })
    });
    io.on('smallgroupRemoved', smallgroup => {
      this.setState({
        smallgroupList: smallgroup,
      })
    });
    io.on('smallgroupUpdated', smallgroup => {
      this.setState({
        smallgroupList: smallgroup,
      })
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
          <Button style={styles.bouton} onPress={this.addSmallGroup}>
            <Text style={styles.textBouton} >Ajouter un SmallGroup</Text>
          </Button>

          {smallgroupList.reverse()}
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

function mapStateToProps(state) {
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
});
