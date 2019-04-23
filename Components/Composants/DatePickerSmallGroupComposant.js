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
// import du socket
import io from '../Sockets/sockets';

export default class DatePickerSmallGroupComposant extends React.Component {

  state = {
    dateSmallGroup: undefined,
    dateSmallGroupList: []
  };

  componentDidMount() {
    io.on('smallgroupReaded', smallgroup => {
      let dateSmallGroupList = ['Toutes les dates',];
      let smallgroupList = smallgroup.map((smallgroup) =>
        dateSmallGroupList.push(smallgroup.date)
      );
      dateSmallGroupList.sort(function (a, b) {
      a = a.split('/');
      b = b.split('/');
      return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
      });
      this.setState({
        dateSmallGroupList: dateSmallGroupList
      });
    });
    io.on('smallgroupReaded', smallgroup => {
      let dateSmallGroupList = ['Toutes les dates',];
      let smallgroupList = smallgroup.map((smallgroup) =>
        dateSmallGroupList.push(smallgroup.date)
      );
      dateSmallGroupList.sort(function (a, b) {
      a = a.split('/');
      b = b.split('/');
      return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
      });
      this.setState({
        dateSmallGroupList: dateSmallGroupList
      });
    });
    io.on('smallgroupUpdated', smallgroup => {
      let dateSmallGroupList = ['Toutes les dates',];
      let smallgroupList = smallgroup.map((smallgroup) =>
        dateSmallGroupList.push(smallgroup.date)
      );
      dateSmallGroupList.sort(function (a, b) {
      a = a.split('/');
      b = b.split('/');
      return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
      });
      this.setState({
        dateSmallGroupList: dateSmallGroupList
      });
    });
    io.on('smallgroupRemoved', smallgroup => {
      let dateSmallGroupList = ['Toutes les dates',];
      let smallgroupList = smallgroup.map((smallgroup) =>
        dateSmallGroupList.push(smallgroup.date)
      );
      dateSmallGroupList.sort(function (a, b) {
      a = a.split('/');
      b = b.split('/');
      return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
      });
      this.setState({
        dateSmallGroupList: dateSmallGroupList
      });
    });
  }

  onDateChange(value: string) {
    this.setState({
      dateSmallGroup: value
    });
    this.props.chosenDate(value)
  }

  render() {

    let dateList = this.state.dateSmallGroupList.map((date, i) =>
      <Picker.Item label={date} value={date} key={i}/>
    );

    return (
            <Item picker style={styles.itemPicker}>
              <Label style={styles.label}>Date :</Label>
              <Picker
                modalStyle={{backgroundColor: '#373737'}}
                headerStyle={{backgroundColor: 'black', borderColor: '#fff', borderBottomWidth: 1}}
                iosHeader="Choix date"
                headerBackButtonText={<Icon name="arrow-back" style={styles.icon} />}
                headerTitleStyle={{color: '#fff', width: 250}}
                itemStyle={{backgroundColor: '#373737'}}
                itemTextStyle={{color: '#fff'}}
                mode="dropdown"
                style={{ width: undefined}}
                placeholder="Filtrer par date"
                placeholderStyle={{ color: "grey"}}
                textStyle={{color: 'white'}}
                placeholderIconColor="#fff"
                selectedValue={this.state.dateSmallGroup}
                onValueChange={this.onDateChange.bind(this)}
              >
                {dateList}
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
