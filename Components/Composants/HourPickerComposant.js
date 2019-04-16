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


export default class HourPickerComposant extends React.Component {

  state = {
    hourSmallGroup: undefined,
  };


  onHourChange(value: string) {
    this.setState({
      hourSmallGroup: value
    });
    this.props.chosenHour(value)
  }

  render() {
    return (
      <Item picker style={styles.itemPicker}>
        <Label style={styles.label}>Horaires :</Label>
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
