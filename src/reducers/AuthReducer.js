import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAILIURE,
         LOADING } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, errorMessage: '', loading: false }

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case LOGIN_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.pyload}
    case LOGIN_USER_FAILIURE:
      return {...state, errorMessage: "Login failed.", loading: false}
    case LOADING:
      return { ...state, loading: true, errorMessage: ''};
    default:
      return state;
  }
}
