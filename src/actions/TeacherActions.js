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
    SIGN_OUT,
    IMAGE_UPLOAD
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
                        .set({ name, phone, address, cnic, age, education, experience, subjects, classes })
                        .then(() => {
                            Actions.teacher_timeline();
                            return{ type: TEACHER_CREATE };
                        })
                        .catch(() => {
                            return{ type: SIGNIN_USER_FAIL };

                        });
                })
            .catch(() => dispatch({ type: SIGNIN_USER_FAIL }));
    };
};


export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: SIGN_OUT });
        firebase.auth().signOut()
            .then(() => {
                Actions.Login();

            })
            .catch(() => {
               // console.log(error);
            });
        };

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

    export const UploadImage = ({uri})=>{
        
        return{
            type: IMAGE_UPLOAD,
            payload: uri
        }
    }
