import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import TeacherReducer from './TeacherReducer';
import StudentReducer from './StudentReducer';
export default combineReducers({
    auth: LoginReducer,
    teacher: TeacherReducer,
    student: StudentReducer
});