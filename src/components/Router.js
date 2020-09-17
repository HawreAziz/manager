import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import WelcomeScreen from './WelcomeScreen';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';


const RouterComponent = () => {
  return <Router>
           <Scene key='root' hideNavBar>
             <Scene key='auth'>
               <Scene
                 key='login'
                 component={LoginForm}
                 title='Please login'
               />
             </Scene>

             <Scene key='main'>
               <Scene
                 rightTitle='Add'
                 onRight={() => {
                   Actions.employeeCreate()}}
                 key='employeeList'
                 component={EmployeeList}
                 title='Employees'
                 initial
              />
              <Scene
               key='employeeCreate'
               component={EmployeeCreate}
               title='Create employee'
              />
              <Scene
               key='employeeEdit'
               component={EmployeeEdit}
               title='Edit employee'
              />
             </Scene>
           </Scene>
         </Router>
}

export default RouterComponent;
