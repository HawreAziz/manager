import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE,
         EMPLOYEE_CREATE_SUCCESS,
         EMPLOYEE_FETCH_SUCCESS,
         EMPLOYEE_UPDATE_SUCCESS,
         EMPLOYEE_DELETE_SUCCESS } from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
}


export const employeeCreate = (name, phone, shift) => {
  const { currentUser } = firebase.auth();
  console.log(currentUser);
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
     .push({name, phone, shift})
     .then(() => {
       dispatch({ type: EMPLOYEE_CREATE_SUCCESS});
       // another solution is Actions.employeeList({type: 'reset'})
       Actions.pop();
     })
   };
}


export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
      })
  };
}


export const saveEmployee = ({name, phone, shift, uid}) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({ type: EMPLOYEE_UPDATE_SUCCESS});
        Actions.pop();
      })
  };
}


export const deleteEmployee = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS});
        Actions.employeeList({ type: 'reset' });
      })
  };
}
