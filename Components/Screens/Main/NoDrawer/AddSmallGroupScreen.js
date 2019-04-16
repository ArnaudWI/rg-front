import React from 'react';
//import bibliothèque react native
import {StyleSheet, ScrollView} from 'react-native';
//import bibliothèque react native
import {
  View,
  Text,
  Button,
  Icon,
  Container,
  Form,
  Textarea,
  Item,
  Picker,
  Label,
  Input,
  Toast,
  DatePicker
} from 'native-base';
// import des composants JS
import HeaderBackComposant from '../../../Composants/HeaderBackComposant';
// import du socket
import io from '../../../Sockets/sockets';
// import de redux
import {connect} from 'react-redux';

export default class AddSmallGroupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
  }

  state = {
    typeSmallGroup: undefined,
    hourSmallGroup: undefined,
    programmeSmallGroup: '',
    prixSmallGroup: '',
    nbrParticipantSmallGroup: '',
    chosenDate: new Date()
  };


  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onDisciplineChange(value: string) {
    this.setState({
      typeSmallGroup: value
    });
  }

  onHourChange(value: string) {
    this.setState({
      hourSmallGroup: value
    });
  }

  handleSubmit = () => {
    let dd = this.state.chosenDate.getDate();
    let mm = this.state.chosenDate.getMonth() + 1;
    let yyyy = this.state.chosenDate.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    this.state.chosenDate = dd + '/' + mm + "/" + yyyy;
    let date = String(this.state.chosenDate)
      console.log(this.state.typeSmallGroup, 'Discipline')
      console.log(date, 'Jours')
      console.log(this.state.hourSmallGroup, 'Horaires')
      console.log(this.state.nbrParticipantSmallGroup, 'Nbr de participants')
      console.log(this.state.prixSmallGroup, 'Prix')
      console.log(this.state.programmeSmallGroup, 'Programme')
        Toast.show({
      text: "Annonce mise à jour !",
      type: "success"
      })
      this.props.navigation.navigate('Small Group')
  };

  render() {
    return (
      <Container style={styles.container}>
        <HeaderBackComposant title={'Ajouter un Small Group'}/>
          <ScrollView style={{flex: 1, alignSelf: 'center'}}>

          <Form style={styles.form}>

            <Item picker style={styles.itemPicker}>
              <Label style={styles.label}>Discipline:</Label>
              <Picker
                modalStyle={{backgroundColor: '#373737'}}
                headerStyle={{backgroundColor: 'black', borderColor: '#fff', borderBottomWidth: 1}}
                iosHeader="Choix discipline"
                headerBackButtonText={<Icon name="arrow-back" style={styles.icon} />}
                headerTitleStyle={{color: '#fff', width: 250}}
                itemStyle={{backgroundColor: '#373737'}}
                itemTextStyle={{color: '#fff'}}
                mode="dropdown"
                style={{ width: undefined}}
                placeholder="Choisir"
                placeholderStyle={{ color: "grey"}}
                textStyle={{color: 'white'}}
                placeholderIconColor="#fff"
                selectedValue={this.state.typeSmallGroup}
                onValueChange={this.onDisciplineChange.bind(this)}
              >
                <Picker.Item label="RS Boxing" value="RS Boxing" />
                <Picker.Item label="Boxe Anglaise" value="Boxe Anglaise" />
                <Picker.Item label="Muay Thaï" value="Muay Thaï" />
                <Picker.Item label="MMA" value="MMA" />
                <Picker.Item label="Grapping" value="Grapping" />
                <Picker.Item label="Conditioning" value="Conditioning" />
                <Picker.Item label="PIYO" value="PIYO" />
                <Picker.Item label="Kid" value="Kid" />
              </Picker>
            </Item>

            <Item style={styles.itemTitle}>
              <Label style={styles.titleLabel} >Date :</Label>
              <DatePicker
              style={{backgroundColor: '#373737'}}
              defaultDate={new Date(2019, 4, 15)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2100, 12, 31)}
              locale={"fr"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Choisir"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "grey" }}
              onDateChange={this.setDate}
              disabled={false}
              />
            </Item>

            <Item picker style={styles.itemPicker}>
              <Label style={styles.label}>Horaires:</Label>
              <Picker
                modalStyle={{backgroundColor: '#373737'}}
                headerStyle={{backgroundColor: 'black', borderColor: '#fff', borderBottomWidth: 1}}
                iosHeader="Choix discipline"
                headerBackButtonText={<Icon name="arrow-back" style={styles.icon} />}
                headerTitleStyle={{color: '#fff', width: 250}}
                itemStyle={{backgroundColor: '#373737'}}
                itemTextStyle={{color: '#fff'}}
                mode="dropdown"
                style={{ width: undefined}}
                placeholder="Choisir"
                placeholderStyle={{ color: "grey"}}
                textStyle={{color: 'white'}}
                placeholderIconColor="#fff"
                selectedValue={this.state.hourSmallGroup}
                onValueChange={this.onHourChange.bind(this)}
              >
                <Picker.Item label="9h00" value="9h00" />
                <Picker.Item label="9h30" value="9h30" />
                <Picker.Item label="10h00" value="10h00" />
                <Picker.Item label="10h30" value="10h30" />
                <Picker.Item label="11h00" value="11h00" />
                <Picker.Item label="11h30" value="11h30" />
                <Picker.Item label="12h00" value="12h00" />
                <Picker.Item label="12h30" value="12h30" />
                <Picker.Item label="13h00" value="13h00" />
                <Picker.Item label="13h30" value="13h30" />
                <Picker.Item label="14h00" value="14h00" />
                <Picker.Item label="14h30" value="14h30" />
                <Picker.Item label="15h00" value="15h00" />
                <Picker.Item label="15h30" value="15h30" />
                <Picker.Item label="16h00" value="16h00" />
                <Picker.Item label="16h30" value="16h30" />
                <Picker.Item label="17h00" value="17h00" />
                <Picker.Item label="17h30" value="17h30" />
                <Picker.Item label="18h00" value="18h00" />
                <Picker.Item label="18h30" value="18h30" />
                <Picker.Item label="19h00" value="19h00" />
                <Picker.Item label="19h30" value="19h30" />
                <Picker.Item label="20h00" value="20h00" />
                <Picker.Item label="20h30" value="20h30" />
                <Picker.Item label="21h00" value="21h00" />
                <Picker.Item label="21h30" value="21h30" />
                <Picker.Item label="22h00" value="22h00" />
                <Picker.Item label="22h30" value="22h30" />
                <Picker.Item label="23h00" value="23h00" />
              </Picker>
            </Item>

            <Item style={styles.itemTitle}>
              <Label style={styles.titleLabel}>Nombre de participants :</Label>
              <Input style={styles.titleInput} onChangeText={(text) => this.setState({nbrParticipantSmallGroup: text})}/>
            </Item>

            <Item style={styles.itemTitle}>
              <Label style={styles.titleLabel} >Prix :</Label>
              <Input style={styles.titleInput} onChangeText={(text) => this.setState({prixSmallGroup: text})}/>
            </Item>

            <Textarea
              value={this.state.programmeSmallGroup}
              style={styles.textArea}
              rowSpan={7}
              bordered
              placeholder="Présenter le programme du Small Group"
              onChangeText={text => this.setState({programmeSmallGroup: text})}
            />
          </Form>

            <Button style={styles.bouton}  onPress={this.handleSubmit}>
              <Text style={styles.textBouton} >Valider le Small Group</Text>
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
  bouton: {
    height: 60,
    width: 320,
    backgroundColor: '#4a802a',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 0,
    alignSelf: 'center',
    marginTop: 20
  },
  textBouton: {
    fontSize: 22,
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
  textArea: {
    backgroundColor: 'black',
    borderColor: '#E52D2F',
    color: 'white',
    fontSize: 20,
    marginTop: 40
  },
  form: {
    width: 320,
  },
  label: {
    fontWeight: 'bold',
    color: "#fff"
  },
  itemPicker: {
    borderColor: '#E52D2F',
    borderBottomWidth:2,
  },
  icon: {
    color: '#E52D2F',
    marginBottom: 5
  },
  itemTitle: {
    borderColor: '#E52D2F',
    borderBottomWidth:2,
    marginLeft: 0
  },
  titleLabel: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
  titleInput: {
    color: '#FFF',
  }
});
