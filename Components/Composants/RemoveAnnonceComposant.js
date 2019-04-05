import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon } from "native-base";
// import de redux
import {connect} from 'react-redux';
// import du socket
import io from '../Sockets/sockets';

class RemoveAnnonceComposant extends React.Component {

  removeYes = () => {
    io.emit("removeAnnonce", this.props.removeAnnonce.id);
  }


  render() {
    return (
      <View style={this.props.removeStyle}>

        <Grid style={styles.gridRemoveQuestion}>
          <Text style={styles.removeQuestion}>Supprimer cette annonce ?</Text>
        </Grid>

        <Grid style={styles.gridRemoveButton}>
          <Col style={styles.colRemoveYesButton} onPress={this.removeYes} >
            <Text style={styles.textYes}>Oui</Text>
          </Col>
        </Grid>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    removeAnnonce: state.removeAnnonce
  };
}

export default connect(
  mapStateToProps,
  null
)(RemoveAnnonceComposant);

const styles = StyleSheet.create({
  gridRemoveQuestion: {
    height: 30,
    justifyContent: 'center'
  },
  removeQuestion: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5
  },
  gridRemoveButton: {
    height: 30
  },
  colRemoveYesButton: {
    justifyContent: 'center',
    backgroundColor: '#4a802a'
  },
  textYes: {
    color: '#fff',
    textAlign: 'center'
  },
});
