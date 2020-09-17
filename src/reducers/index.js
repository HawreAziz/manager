import { combineReducers } from 'redux';
import Auth from './AuthReducer';
import EmployeesForm from './EmployeeFormReducer';
import Employees from './EmployeeReducer';

export default combineReducers({
  employees: () => [],
  auth: Auth,
  employeesForm: EmployeesForm,
  employees: Employees,
});
