import React, { Component } from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import {Tab, Tabs, ScrollableTab, Text } from 'native-base';
//import de mes Tabs
import TabRSBoxingComponent from './TabRSBoxingComponent';
import TabMuayThaiComponent from './TabMuayThaiComponent';
import TabBoxeAnglaiseComponent from './TabBoxeAnglaiseComponent';
import TabMMAComponent from './TabMMAComponent';
import TabGrappingComponent from './TabGrappingComponent';
import TabConditioningComponent from './TabConditioningComponent';
import TabPiyoComponent from './TabPiyoComponent';
import TabMMAKidsComponent from './TabMMAKidsComponent';

export default class ScrollableTabPlanning extends Component {
  render() {
    return (
        <Tabs
          style={{ marginTop: 10,borderBottomColor: '#000'}}
          renderTabBar={()=>
            <ScrollableTab
              tabsContainerStyle={{ backgroundColor: '#373737'}}
              underlineStyle={{backgroundColor: '#E52D2F'}}
          />
          }
        >
          <Tab heading="RS Boxing"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabRSBoxingComponent/>
          </Tab>
          <Tab heading="Muay Thaï"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabMuayThaiComponent/>
          </Tab>
          <Tab heading="Boxe Anglaise"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabBoxeAnglaiseComponent/>
          </Tab>
          <Tab heading="MMA"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabMMAComponent/>
          </Tab>
          <Tab heading="Grapping"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabGrappingComponent/>
          </Tab>
          <Tab heading="Conditioning"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabConditioningComponent/>
          </Tab>
          <Tab heading="Piyo"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabPiyoComponent/>
          </Tab>
          <Tab heading="MMA Kids"
            tabStyle={{ backgroundColor: '#373737' }}
            activeTabStyle={{ backgroundColor: '#373737' }}
            style={{ backgroundColor: '#373737'}}
            activeTextStyle={{color: '#E52D2F'}}
            textStyle={{color: '#fff', fontWeight: 'bold'}}>
            <TabMMAKidsComponent/>
          </Tab>
        </Tabs>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#373737'
  }
});
