import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-community/picker';


const DaysOfWeekPicker = ({ selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Shift</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.pickerStyle}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuseday" value="Tuseday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 30
  },
  pickerStyle: {
    flex: 3
  }
};

export { DaysOfWeekPicker };
