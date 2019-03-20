import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque react native
import {
  View,
  Text,
  Button,
  Icon,
  Container
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';



export default class RDVTrainingDetailsScreen extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'RDV Training Details'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <Button danger onPress={ ()=> this.props.navigation.navigate('AddRDVTraining')}>
              <Text>Ajouter un RDV Training</Text>
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
});
