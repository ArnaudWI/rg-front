import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Container, Header, Title, Button, Icon, Left, Right, Body, View } from "native-base";
// import de mes éléments React Navigation
import { withNavigation } from 'react-navigation';

class HeaderMenuComposant extends React.Component {

  render() {
    return (

        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={styles.icon} />
            </Button>
          </Left>
          <Body >
            <Title style={styles.title}>{this.props.title}</Title>
          </Body>
          <Right/>
        </Header>

    );
  }
}

export default withNavigation(HeaderMenuComposant);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    borderColor: '#E52D2F',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  icon: {
    color: '#E52D2F',
    marginBottom: 5
  },
  title: {
    width: 300,
    color: 'white',
    fontSize: 20
  }
})
