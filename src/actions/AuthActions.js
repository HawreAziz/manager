import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAILIURE,
         LOADING } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const setEmail = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
}


export const setPassword = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
}

export const loginUser = ({email, password}) => {
  return dispatch => {
    dispatch({type: LOADING});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {loginSuccess(dispatch, user)})
      .catch(error => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {loginSuccess(dispatch, user)})
          .catch(error => {dispatch({type: LOGIN_USER_FAILIURE })
          });
      });
  };
}


const loginSuccess = async (dispatch, user) => {
  dispatch({type: LOGIN_USER_SUCCESS, user});
  Actions.main();
}

export const onLoading = () => {
  return {
    type: LOADING
  }
}
