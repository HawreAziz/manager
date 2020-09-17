import React from 'react';
import { CardSection } from './CardSection';
import { Input } from './Input';
import { DaysOfWeekPicker } from './Picker';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../../actions';


class EmployeeForm extends React.Component {
  render(){
    const { name, phone, shift, employeeUpdate } = this.props;
    return(
      <View>
      <CardSection>
        <Input
          placeholder='Jezzy'
          label='Name'
          value={name}
          onChangeText={(value) => employeeUpdate({prop: 'name', value})}
        />
      </CardSection>
      <CardSection>
        <Input
          placeholder='555-555-555'
          label='Phone'
          keyboardType='phone-pad'
          value={phone}
          onChangeText={(value) => employeeUpdate({prop: 'phone', value})}
        />
      </CardSection>
      <CardSection>
        <DaysOfWeekPicker
          selectedValue={shift}
          onValueChange={(value) => employeeUpdate({prop: 'shift', value})}
        />
      </CardSection>
      </View>
    );
  }
}


const mapStateToProps = state => {
  const { name, phone, shift } = state.employeesForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
