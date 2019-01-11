import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import  TeacherReducer from './TeacherReducer';
export default combineReducers({
    auth : LoginReducer,
    teacher: TeacherReducer
});