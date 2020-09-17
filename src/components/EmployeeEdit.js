import _ from 'lodash';
import React from 'react';
import { Card,
         CardSection,
         Input,
         Button,
         DaysOfWeekPicker,
         Confirm } from './common';
import { connect } from 'react-redux';
import { saveEmployee, employeeUpdate, deleteEmployee } from '../actions'
import EmployeeForm from './common/EmployeeForm';
import Communications from 'react-native-communications';



class EmployeeEdit extends React.Component{
  state = { showModal: false};

  UNSAFE_componentWillMount(){
    const {name, phone, shift} = this.props.employee;
    _.map(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value})
    });
  }

  onUpdateEmployee(){
    const { name, phone, shift } = this.props;
    this.props.saveEmployee({name, phone, shift, uid: this.props.employee.uid});
  }

  textEmployee(){
    const {name, phone, shift} = this.props;
    Communications.textWithoutEncoding(phone, `Hi ${name}!\nYour upcomming shift is ${shift}`);
  }

  onAccept(){
    const { uid } = this.props.employee;
    this.props.deleteEmployee({ uid });
  }

  render(){
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection customStyle={{marginTop: 50}}>
          <Button onPress={this.onUpdateEmployee.bind(this)}>
            Save change
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.textEmployee.bind(this)}>
            Text employee
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
            Fire this employee
          </Button>
        </CardSection>
        <CardSection>
          <Confirm visible={this.state.showModal}
            onDecline={() => this.setState({showModal: false})}
            onAccept={this.onAccept.bind(this)}>
            Are you sure you want to fire this employee
          </Confirm>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeesForm;
  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate, saveEmployee, deleteEmployee})(EmployeeEdit);
