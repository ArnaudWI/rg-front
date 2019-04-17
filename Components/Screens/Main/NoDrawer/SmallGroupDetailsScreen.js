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
import OrgaSmallGroupDetailsComposant from '../../../Composants/OrgaSmallGroupDetailsComposant';
import NbrParticipantsIndicationComposant from '../../../Composants/NbrParticipantsIndicationComposant';


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

            <OrgaSmallGroupDetailsComposant date={'10/10/2019'} hour={'19h00'} price={'10'}/>

            <NbrParticipantsIndicationComposant nbrParticipantsMinimum={'5'}/>

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

            <Text style={styles.participantsTitle}>Participants : {participantsData.length} / 5
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
  participantsTitle: {
    color: '#FFF',
    fontSize: 25,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 320,
  },


});
