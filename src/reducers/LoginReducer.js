const INITIAL_STATE = {
    email: '',
    password: '',
    user: '',
    error: '',
    LogInLoading: false,
    teacher: false,
    student: true
};
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    TEACHER_STATE,
    STUDENT_STATE,
    
} from '../actions/types';
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {

        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case TEACHER_STATE:
            console.log("reducer state teacher",state.teacher);           
            return { ...state, teacher: !state.teacher,student: false };
        case STUDENT_STATE:
            return { ...state, student: !state.student, teacher:false };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE/*, user: action.payload*/ };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Error in Log In', password: '', LogInLoading: false };
        case LOGIN_USER:
            return { ...state, LogInLoading: true, error: '' };
        default:
            return state;
    }
};