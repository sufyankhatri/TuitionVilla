import firebase from '@firebase/app';
import '@firebase//database';
import { Actions } from "react-native-router-flux";

import {
    TEACHER_UPDATE,
    TEACHER_CREATE,
    CLASS_INPUT,
    SUBJECT_INPUT
} from './types';
export const teacherUpdate = ({ prop, value }) => {
    return {
        type: TEACHER_UPDATE,
        payload: { prop, value }
    };
};

export const teacherCreate = ({name, phone, address, cnic, age, education, experience, subjects, classes}) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/Teachers/${currentUser.uid}`)
            .push({ name, phone, address, cnic, age, education, experience, subjects, classes })
            .then(() => {
                dispatch({ type: TEACHER_CREATE });
                Actions.timeline();
                
            }
            );
    };

};
export const ClassInput =({condition, val})=>{
    return{
        type: CLASS_INPUT,
        payload: {condition , val}
    };
    
}
export const SubjectInput = ({condition,val}) =>{
    return{
        type: SUBJECT_INPUT,
        payload: {condition, val}
    };
}
export const employeeFetch = () => {
    const {currentUser}= firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/Students/`)
        .on('value', snapshot =>{
            dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
        });
    };
};

