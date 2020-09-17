import React from 'react';
import _ from 'lodash';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends React.Component{
  UNSAFE_componentWillMount(){
    this.props.fetchEmployees();
  }

  render(){
    return (
      <View>
        <FlatList
          data={this.props.employees}
          keyExtractor={(item) => item.uid}
          renderItem={({item}) => {
            return <ListItem employee={item} />
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  console.log(employees);
  return { employees };
}

export default connect(mapStateToProps, {fetchEmployees})(EmployeeList);
