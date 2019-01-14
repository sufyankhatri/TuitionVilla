import firebase from '@firebase/app';
import '@firebase//database';
import { Actions } from "react-native-router-flux";

import {
    TEACHER_UPDATE,
    TEACHER_CREATE,
    CLASS_INPUT,
    SUBJECT_INPUT,
    SIGNIN_USER,
    SIGNIN_USER_FAIL,
    SIGNIN_USER_SUCCESS,
    SIGN_OUT
} from './types';
export const teacherUpdate = ({ prop, value }) => {
    return {
        type: TEACHER_UPDATE,
        payload: { prop, value }
    };
};

export const signUser = ({ email, password, name, phone, address, cnic, age, education, experience, subjects, classes }) => {

    return (dispatch) => {
        dispatch({ type: SIGNIN_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                () => {
                    const { currentUser } = firebase.auth();
                    firebase.database().ref(`/users/Teachers/${currentUser.uid}`)
                        .push({ name, phone, address, cnic, age, education, experience, subjects, classes })
                        .then(() => {
                            dispatch({ type: TEACHER_CREATE });
                            Actions.timeline();

                        })
                        .catch(() => {
                            signInUserFail(dispatch);

                        });
                })
            .catch(() => signInUserFail(dispatch));
    };
};


export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: SIGN_OUT });
        firebase.auth().signOut()
            .then(() => {
                Actions.Login();

            })
            .catch((error) => {
                console.log(error);
            });
        };

    };
    const signUserSuccess = (dispatch, user) => {


        dispatch({
            type: SIGNIN_USER_SUCCESS,
            payload: user
        });

    }
    const signInUserFail = (dispatch) => {
        dispatch({ type: SIGNIN_USER_FAIL });
    };




    export const ClassInput = ({ condition, val }) => {
        return {
            type: CLASS_INPUT,
            payload: { condition, val }
        };

    }
    export const SubjectInput = ({ condition, val }) => {
        return {
            type: SUBJECT_INPUT,
            payload: { condition, val }
        };
    }


