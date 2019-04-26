import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon, Form, Textarea, Button, Item, Label, Right, Toast} from "native-base";
// import du socket
import io from '../Sockets/sockets';
// import des composants JS
import ResponseComposant from './ResponseComposant';
// import de redux
import {connect} from 'react-redux';

class ResponseComAboComposant extends React.Component {

  state = {
    response: '',
    responseList: []
  }

  componentDidMount() {
    this.setState({
      responseList: this.props.responseList
    })
    io.on('responseAdded', responseList => {
        this.setState({
          responseList: responseList,
        });
    });
  }

  handleResponse = () => {
    Toast.show({
      text: "Réponse émise !",
      type: "success",
      position: "top",
      duration: 2000
    })
    io.emit("addResponse", {idrdvtrainings: this.props.id, responseContent: this.state.response, responseAuteur: this.props.user.firstName});
    this.setState({
      response: ''
    })
  }

  render() {

    let responseList = this.state.responseList.map((response, i) =>
      <ResponseComposant
      key={i}
      responseContent={response.responseContent}
      responseAuteur={response.responseAuteur}
      />);

    return (
      <View style={this.props.responseStyle}>

        {responseList}

        <Grid style={styles.gridResponseForm}>
          <Form style={styles.form}>

          <Item stackedLabel style={styles.itemTitle}>
            <Label style={styles.titleLabel} >{this.props.user.firstName} dit:</Label>
            <Textarea
              style={styles.textArea}
              rowSpan={3}
              bordered
              value={this.state.response}
              placeholder="Je répond à la proposition de training..."
              onChangeText={text => this.setState({response: text})}
            />
          </Item>

          </Form>
        </Grid>

        <Grid style={styles.gridResponseBouton}>
          <Right>
            <Button style={styles.detailsBouton} onPress={this.handleResponse}>
              <Text style={styles.detailsTextBouton}>Je Réponds</Text>
            </Button>
          </Right>
        </Grid>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userData,
  };
}

export default connect(
  mapStateToProps,
  null
)(ResponseComAboComposant);

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
  textArea: {
    backgroundColor: 'black',
    borderColor: '#E52D2F',
    color: 'white',
    fontSize: 13,
    width: 300,
  },
  detailsBouton: {
    height: 40,
    width: 140,
    backgroundColor: '#4a802a',
    borderColor: '#FFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0,
  },
  detailsTextBouton: {
    fontSize: 13,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
  gridResponseForm: {
    height: 'auto',
    alignSelf: 'center',
    paddingBottom: 3
  },
  itemTitle: {
    borderBottomWidth:0,
    marginLeft: 0
  },
  titleLabel: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  form: {
    marginLeft: 10,
    marginRight: 10,
  },
  gridResponseBouton: {
    alignSelf: 'center',
    width: 300,
    alignSelf: 'center',
    paddingBottom: 5,
  }
});
