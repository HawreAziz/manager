import React from 'react';
import { Card,
         CardSection,
         Input,
         Button,
         DaysOfWeekPicker} from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions'
import EmployeeForm from './common/EmployeeForm';



class EmployeeCreate extends React.Component{
  createEmployee(){
    const { name, phone, shift } = this.props;
    this.props.employeeCreate(name, phone, shift || 'Monday');
  }

  render(){
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection customStyle={{ marginTop: 50 }}>
          <Button onPress={this.createEmployee.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeesForm;
  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeCreate})(EmployeeCreate);
