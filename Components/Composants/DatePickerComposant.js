import React from 'react';
//import bibliothèque react native
import {StyleSheet} from 'react-native';
//import bibliothèque react native
import {
  Item,
  Label,
  DatePicker
} from 'native-base';

export default class DatePickerComposant extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
  }

  state = {
    chosenDate: new Date()
  };


  setDate(newDate) {
    this.setState({ chosenDate: newDate });
    this.props.chosenDate(newDate)
  }


  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
});
