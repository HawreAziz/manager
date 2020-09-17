import { EMPLOYEE_UPDATE,
         EMPLOYEE_CREATE_SUCCESS,
         EMPLOYEE_UPDATE_SUCCESS,
         EMPLOYEE_DELETE_SUCCESS } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '', employees: []}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_CREATE_SUCCESS:
    case EMPLOYEE_DELETE_SUCCESS:
    case EMPLOYEE_UPDATE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  };
}
