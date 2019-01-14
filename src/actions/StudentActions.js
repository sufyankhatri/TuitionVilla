import firebase from '@firebase/app';
import '@firebase//database';
import {
  STUDENT_UPDATE,
  STUDENT_CREATE_SUCCESS,
  STUDENT_CREATE_FAIL,
  SIGNIN_USER,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  IMAGE_PICKED
} from './types';
import { Actions } from 'react-native-router-flux';
export const imagePicked = (uri, data) => {
  return {
    type: IMAGE_PICKED,
    payload: { uri, data }
  };
};

export const studentUpdate = ({ prop, value }) => {
  return {
    type: STUDENT_UPDATE,
    payload: { prop, value }
  };
};

export const signUpHandler = ({ email, password, name, phone, address, cnic, age, Class, institute, subjects }) => {

  return (dispatch) => {
    dispatch({ type: SIGNIN_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          
          const { currentUser } = firebase.auth();
          console.log(currentUser.uid)

          firebase.database().ref(`/users/Students/${currentUser.uid}`)
            .set({ name, email, phone, address, cnic, age, Class, institute, subjects, })
            .then(() => {
              dispatch({ type: STUDENT_CREATE_SUCCESS });
              //Actions.timeline();
            })
            .catch((err) => {
              dispatch({ type: STUDENT_CREATE_FAIL, payload: err })
            });
        })
      .catch(() => signInUserFail(dispatch));
  };
};

const signStudentSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNIN_USER_SUCCESS,
    payload: user
  });

}
const signInUserFail = (dispatch) => {
  dispatch({
    type: SIGNIN_USER_FAIL
  });
};
export const subjectsChanged = (condition, text) => {
  return {
    type: SUBJECTS_CHANGED,
    payload: { text, condition }
  };
};


