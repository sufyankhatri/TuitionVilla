import firebase from '@firebase/app';
import '@firebase//database';
import { Actions } from "react-native-router-flux";

import {
    TEACHER_UPDATE,
    TEACHER_CREATE
} from './types';
export const teacherUpdate = ({ prop, value }) => {
    return {
        type: TEACHER_UPDATE,
        payload: { prop, value }
    };
};

export const teacherCreate = ({name, phone, address, cnic, age, education, experience}) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/Teachers/${currentUser.uid}`)
            .push({ name, phone, address, cnic, age, education, experience })
            .then(() => {
                dispatch({ type: TEACHER_CREATE });
                Actions.timeline();
                
            }
            );
    };

};
