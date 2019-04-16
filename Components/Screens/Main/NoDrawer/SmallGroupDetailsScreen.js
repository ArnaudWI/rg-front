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
  Grid,
  Col,
  List,
  ListItem
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';
import TitleComposant from '../../../Composants/TitleComposant';
import ParticipantsListingComposant from '../../../Composants/ParticipantsListingComposant';

export default class SmallGroupDetailsScreen extends React.Component {

  state = {
    participationUser: false,
  }

 handleSubmit = () => {
  this.setState({
    participationUser: !this.state.participationUser
  });
  console.log(this.state.participationUser)
}

  render() {

    let participantsData = [
      {
        lastName: 'Doe',
        firstName: 'Jane'
      },
      {
        lastName: 'Doe',
        firstName: 'John'
      },
      {
        lastName: 'Chang',
        firstName: 'Mai'
      },
      {
        lastName: 'Einstein',
        firstName: 'Albert'
      },
    ]

    let participantsList = participantsData.map((participant, i) =>
      <ParticipantsListingComposant key={i}
        firstName={participant.firstName} lastName={participant.lastName}
        position={i + 1}/>)

    let boutonStyle = {
      height: 60,
      width: 320,
      backgroundColor: '#4a802a',
      borderColor: 'black',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 0,
      alignSelf: 'center',
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }

    let participation = 'Je participe';

    if (this.state.participationUser) {
      participation = 'Je ne participe plus';
      boutonStyle.backgroundColor = '#E52D2F';
    }

    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'SG - Muay Thaï'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <TitleComposant title={'Organisation'}/>

            <View style={styles.viewOrga}>
              <Grid style={styles.gridOrga}>
                <Col style={styles.colOrgaIcon}>
                  <Icon name="calendar" style={styles.iconBouton}/>
                </Col>
                <Col style={styles.colOrgaText}>
                  <Text style={styles.textDate} >Date : 10/10/2019</Text>
                </Col>
              </Grid>
              <Grid style={styles.gridOrga}>
                <Col style={styles.colOrgaIcon}>
                  <Icon name="clock" style={styles.iconBouton}/>
                </Col>
                <Col style={styles.colOrgaText}>
                  <Text style={styles.textHeure} >Heure : 19h00</Text>
                </Col>
              </Grid>
              <Grid style={styles.gridOrga}>
                <Col style={styles.colOrgaIcon}>
                  <Icon name="logo-euro" style={styles.iconBouton}/>
                </Col>
                <Col style={styles.colOrgaText}>
                  <Text style={styles.textPrix} >Prix : 10 €</Text>
                </Col>
              </Grid>
            </View>

            <View style={styles.viewParticipants}>
              <Grid style={styles.gridParticipants}>
                <Col style={styles.colParticipantsText}>
                  <Text style={styles.textParticipants} >
                    Nombre de participants minimum : 5
                  </Text>
                </Col>
                <Col style={styles.colParticipantsIcon}>
                  <Icon name="people" style={styles.iconBouton}/>
                </Col>
              </Grid>
                <Grid>
                  <View
                    style={styles.tiret}
                  />
                </Grid>
            </View>

            <TitleComposant title={'Programme'}/>

            <Text style={styles.programmeText}>Levitate levitate praevenirent
              verticosi accolas adcursu sed inopino pro inopino levitate per
              enim circumfusus rumores.
            </Text>

            <Button style={boutonStyle}  onPress={this.handleSubmit}>
                <Grid style={styles.gridBouton}>
                  <Col style={styles.colBoutonText}>
                    <Text style={styles.textBouton} >{participation}</Text>
                  </Col>
                  <Col style={styles.colBoutonIcon}>
                    {this.state.participationUser === false
                      ? <Icon name="thumbs-up" style={styles.iconBouton}/>
                      : <Icon name="thumbs-down" style={styles.iconBouton}/>}
                  </Col>
                </Grid>
            </Button>

            <Text style={styles.participantsTitle}>Participants : 2 / 5
            </Text>


            <List>
              {participantsList}
            </List>

          </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
  },
  viewOrga: {
    backgroundColor: 'black',
    borderColor: '#E52D2F',
    borderWidth: 1,
    marginTop: 20,
    width: 320,
    height: 'auto'
  },
  gridOrga: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colOrgaIcon: {
    width: '20%'
  },
  colOrgaText: {
    width: '80%'
  },
  textDate: {
    fontSize: 18,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'white'
  },
  textHeure: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'white'
  },
  textPrix: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'white'
  },
  gridBouton: {
    marginLeft: 20,
    marginRight: 20
  },
  colBoutonText: {
    width: '80%'
  },
  colBoutonIcon: {
    width: '20%'
  },
  textBouton: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
  iconBouton: {
    color: '#FFF',
    fontSize: 25,
  },
  programmeText: {
    color: '#FFF',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 320,
  },
  tiret: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 3,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 250
  },
  viewParticipants: {
    width: 320
  },
  colParticipantsText: {
    width: '85%'
  },
  colParticipantsIcon: {
    width: '15%'
  },
  textParticipants: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center'
  },
  gridParticipants: {
    marginTop: 15,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  participantsTitle: {
    color: '#FFF',
    fontSize: 25,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 320,
  },


});
