import React from 'react';
// import des éléments de la bibliothèque native base
import {
  View,
} from 'native-base';
// import des éléments de la bibliothèque react native
import {Image, SafeAreaView, ScrollView } from 'react-native';
// imports de mes composants de navigation
import {createDrawerNavigator, DrawerItems, createAppContainer, createStackNavigator} from 'react-navigation';

// imports de mes screens au sein de mon composant App et de ma navigation
// screens pour la connexion
import SignUpScreen from '../Screens/Connexion/SignUpScreen';
import HomeScreen from '../Screens/Connexion/HomeScreen';
import SignInScreen from '../Screens/Connexion/SignInScreen';
// screens avec drawermenu
import AccueilScreen from '../Screens/Main/WithDrawer/AccueilScreen';
import PlanningScreen from '../Screens/Main/WithDrawer/PlanningScreen';
import SmallGroupScreen from '../Screens/Main/WithDrawer/SmallGroupScreen';
import RDVTrainingScreen from '../Screens/Main/WithDrawer/RDVTrainingScreen';
import ExtraSportifScreen from '../Screens/Main/WithDrawer/ExtraSportifScreen';
import WodScreen from '../Screens/Main/WithDrawer/WodScreen';
import MonCompteScreen from '../Screens/Main/WithDrawer/MonCompteScreen';
//screens sans le drawermenu
import AddAnnonceScreen from '../Screens/Main/NoDrawer/AddAnnonceScreen';
import AddSmallGroupScreen from '../Screens/Main/NoDrawer/AddSmallGroupScreen';
import AddRDVTrainingScreen from '../Screens/Main/NoDrawer/AddRDVTrainingScreen';
import AddExtraSportifScreen from '../Screens/Main/NoDrawer/AddExtraSportifScreen';
import ModifyWodScreen from '../Screens/Main/NoDrawer/ModifyWodScreen';
import SmallGroupDetailsScreen from '../Screens/Main/NoDrawer/SmallGroupDetailsScreen';
import RDVTrainingDetailsScreen from '../Screens/Main/NoDrawer/RDVTrainingDetailsScreen';
import ExtraSportifDetailsScreen from '../Screens/Main/NoDrawer/ExtraSportifDetailsScreen';
// création des composants du drawermenu
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{backgroundColor: 'black', height: '100%',borderStyle: 'solid', borderColor: '#E52D2F', borderWidth: 1}}>

    <View style={{height: 170}}>
      <Image source={require('../../public/logo/logo-rg.png')} style={{height: 150, width: 150, alignSelf: 'center'}}/>
    </View>

    <ScrollView  style={{color:'white'}}>
      <DrawerItems {...props}
        itemStyle={{backgroundColor:'#000', borderStyle: 'solid', borderColor: '#E52D2F', borderBottomWidth: 1}}
        itemsContainerStyle={{marginTop: 10}}
        activeLabelStyle={{color:'#E52D2F'}}
        labelStyle={{color: '#ffffff', fontSize: 16}}
      />
    </ScrollView>

  </SafeAreaView>

)
// création de mon drawermenu
const MainNavigator = createDrawerNavigator({
  'Accueil': AccueilScreen,
  'Planning': PlanningScreen,
  'Small Group': SmallGroupScreen,
  'RDV Training': RDVTrainingScreen,
  'Extra Sportif': ExtraSportifScreen,
  'Wod de la semaine': WodScreen,
  'Mon Compte': MonCompteScreen
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: '#E52D2F',
    inactiveTintColor: 'white'
  }
});

// Création de ma navigation globale qui contient à la fois mes pages non contenues
// dans la bottom navigation et les pages de la bottom Navigation

var StackNavigator = createStackNavigator({
  // screens de connexion
  Home: HomeScreen,
  SignUp: SignUpScreen,
  SignIn: SignInScreen,
  // screens sans drawer
  AddAnnonce: AddAnnonceScreen,
  AddSmallGroup: AddSmallGroupScreen,
  AddRDVTraining: AddRDVTrainingScreen,
  AddExtraSportif: AddExtraSportifScreen,
  ModifyWod: ModifyWodScreen,
  SmallGroupDetails: SmallGroupDetailsScreen,
  RDVTrainingDetails: RDVTrainingDetailsScreen,
  ExtraSportifDetails: ExtraSportifDetailsScreen,
  // screens avec drawer
  MainNavigator: MainNavigator
}, {headerMode: 'none'  });

// export du composant navigation
export default Navigation = createAppContainer(StackNavigator);
