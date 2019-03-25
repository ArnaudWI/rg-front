import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
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
import PhotoZoomComposant from '../../../Composants/PhotoZoomComposant';
import ScrollableTabPlanning from '../../../Composants/ScrollableTabPlanning';

export default class PlanningScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon active name="calendar" style={{fontSize: 17, color: tintColor}}/>
    )
  }
  render() {
    return (
      <Container style={styles.container}>
        <HeaderMenuComposant title={'Planning'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>
            <TitleComposant title={'Saison 2018/2019'}/>
            <PhotoZoomComposant/>
            <ScrollableTabPlanning/>
          </ScrollView>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737'
  }
});
