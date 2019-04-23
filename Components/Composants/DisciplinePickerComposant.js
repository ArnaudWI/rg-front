import React from 'react';
//import bibliothèque react native
import {StyleSheet} from 'react-native';
//import bibliothèque react native
import {
  Item,
  Picker,
  Label,
  Icon
} from 'native-base';


export default class DisciplinePickerComposant extends React.Component {

  state = {
    disciplineSmallGroup: undefined,
  };

  componentDidMount() {
    if (this.props.valueDiscipline) {
      this.setState({
        disciplineSmallGroup: this.props.valueDiscipline
      });
    }
  }

  onDisciplineChange(value: string) {
    this.setState({
      disciplineSmallGroup: value
    });
    this.props.chosenDiscipline(value)
  }

  render() {
    return (
            <Item picker style={styles.itemPicker}>
              <Label style={styles.label}>Discipline :</Label>
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
                selectedValue={this.state.disciplineSmallGroup}
                onValueChange={this.onDisciplineChange.bind(this)}
              >
                <Picker.Item label="Toutes les disciplines" value="Toutes les disciplines" />
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
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: "#fff"
  },
  itemPicker: {
    borderColor: '#E52D2F',
    borderBottomWidth:2,
  }
});
