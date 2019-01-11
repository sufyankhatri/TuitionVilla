import firebase from '@firebase/app';
import '@firebase//auth';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  TEACHER_STATE,
  STUDENT_STATE,
  SIGN_OUT
} from './types';


export const emailChanged = (text) => {

  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {

  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const teacherState = () => {

  return {
    type: TEACHER_STATE
  };
};

export const studentState = () => {
  return {
    type: STUDENT_STATE
  };
};
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};

export const signUser = ({ email, password }) => {

  return (dispatch) => {
    dispatch({ type: SIGNIN_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signUserSuccess(dispatch, user))
      .catch(() => signInUserFail(dispatch));
  };
};

const signUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNIN_USER_SUCCESS,
    payload: user
  });
  Actions.Information();
}
const signInUserFail = (dispatch) => {
  dispatch({ type: SIGNIN_USER_FAIL });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.Information();
};


export const signOut = () => {
  
  firebase.auth().signOut().
  then(()=> {
    console.log('Signed Out');
  }) 
  .catch(() =>{
    console.log('Sign Out Error');
  });
  Actions.Login();
  return{
    type: SIGN_OUT
  };
};