import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { ListItem, Text } from "native-base";

export default class ParticipantsListingComposant extends React.Component {
  render() {
    return (
      <ListItem>
        <Text style={styles.listText}>{this.props.position} - {this.props.firstName} {this.props.lastName}</Text>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  listText: {
    color: '#fff'
  }
});
