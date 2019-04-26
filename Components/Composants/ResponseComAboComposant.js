import React from 'react';
//import bibliothèque react native
import {StyleSheet } from 'react-native';
//import bibliothèque native base
import { Grid, Col, View, Text, Icon, Form, Textarea, Button, Item, Label, Right} from "native-base";
// import du socket
import io from '../Sockets/sockets';
// import des composants JS
import ResponseComposant from './ResponseComposant';

export default class ResponseComAboComposant extends React.Component {

  state = {
    response: ''
  }

  render() {
    return (
      <View style={this.props.responseStyle}>

        <ResponseComposant/>
        <ResponseComposant/>

        <Grid style={styles.gridResponseForm}>
          <Form style={styles.form}>

          <Item stackedLabel style={styles.itemTitle}>
            <Label style={styles.titleLabel} >Gerald dit:</Label>
            <Textarea
              style={styles.textArea}
              rowSpan={3}
              bordered
              placeholder="Je répond à la proposition de training..."
              onChangeText={text => this.setState({response: text})}
            />
          </Item>

          </Form>
        </Grid>

        <Grid style={styles.gridResponseBouton}>
          <Right>
            <Button style={styles.detailsBouton} onPress={() => console.log(this.state.response)}>
              <Text style={styles.detailsTextBouton}>Je Réponds</Text>
            </Button>
          </Right>
        </Grid>
      </View>
    );
  }
}

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
