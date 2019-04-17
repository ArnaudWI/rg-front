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


export default class NbrParticipantPickerComposant extends React.Component {

  state = {
    nbrPartSmallGroup: undefined,
  };

  componentDidMount() {
    if (this.props.valueNbr) {
      this.setState({
        nbrPartSmallGroup: this.props.valueNbr
      });
    }
  }

  onNbrPartChange(value: number) {
    this.setState({
      nbrPartSmallGroup: value
    });
    this.props.chosenNbrPart(value)
  }

  render() {
    return (
      <Item picker style={styles.itemPicker}>
        <Label style={styles.label}>Nombre de participants :</Label>
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
          selectedValue={this.state.nbrPartSmallGroup}
          onValueChange={this.onNbrPartChange.bind(this)}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="6" value={6} />
          <Picker.Item label="7" value={7} />
          <Picker.Item label="8" value={8} />
          <Picker.Item label="9" value={9} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="11" value={11} />
          <Picker.Item label="12" value={12} />
          <Picker.Item label="13" value={13} />
          <Picker.Item label="14" value={14} />
          <Picker.Item label="15" value={15} />
          <Picker.Item label="16" value={16} />
          <Picker.Item label="17" value={17} />
          <Picker.Item label="18" value={18} />
          <Picker.Item label="19" value={19} />
          <Picker.Item label="20" value={20} />
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
