// import firebase from '@firebase/app';
// import '@firebase//auth';
//import firebase from 'firebase';
import firebase from '../config/FirebaseConfig';
import { Actions } from 'react-native-router-flux';
import {connect }from 'react-redux'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  TEACHER_STATE,
  STUDENT_STATE
} from './types';
import {teacherFetch, teachersFetch} from './TeacherActions';
import { studentFetch, studentsFetch } from './StudentActions';


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
        const{currentUser} = firebase.auth()
        uid=currentUser.uid
        dispatch({ type: LOGIN_USER_SUCCESS, payload:uid });
        console.log("Student:",student,"Teacher:",teacher);
        if (student)
          {
          studentFetch(dispatch);
          teachersFetch(dispatch)
          Actions.student_timeline();
          console.log("Actions.student");
          }
        else if(teacher){
          teacherFetch(dispatch);
          studentsFetch(dispatch)
          Actions.teacher_timeline();
          console.log("Actions.teacher");
        }
      })
      .catch(
        () => {

          console.log("failed!!");
          dispatch({ type: LOGIN_USER_FAIL });
        });

  };
};


// const loginUserFail = () => {

// };