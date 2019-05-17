import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { ListItem, Text, Right, Left, Icon, Toast } from "native-base";
// import du socket
import io from '../Sockets/sockets';

export default class UsersListComposant extends React.Component {

  removeUser = () => {
    io.emit("removeUser", this.props.id);
    Toast.show({
      text: "Utilisateur supprimé !",
      type: "success",
      position: "top"
    })
  }

  render() {
    return (
      <ListItem>
        <Left>
          <Text style={styles.listText}>{this.props.position} - {this.props.firstName} {this.props.lastName}</Text>
        </Left>
        <Right>
          <Icon style={styles.listText} name="trash" onPress={this.removeUser}/>
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  listText: {
    color: '#fff'
  }
});
