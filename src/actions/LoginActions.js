import firebase from '@firebase/app';
import '@firebase//auth';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  TEACHER_STATE,
  STUDENT_STATE
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
export const loginUser = ({ email, password, student, teacher }) => {

  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
      
        dispatch({ type: LOGIN_USER_SUCCESS });
        if (student)
          Actions.student_timeline();
        if (teacher)
          Actions.teacher_timeline();


      })
      .catch(
        () => {
          return { type: LOGIN_USER_FAIL };
        });

  };
};


// const loginUserFail = () => {

// };

const loginUserSuccess = (student, teacher) => {
};

