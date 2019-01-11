import {
    TEACHER_UPDATE,
    TEACHER_CREATE
}  from '../actions/types';

const INITIAL_STATE={
    name: '',
    Address:'',
    phone:'',
    cnic:'',
    age:'',
    education:'',
    experience:''
};

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
            case TEACHER_UPDATE:
                return {...state, [action.payload.prop]:  action.payload.value};
            case TEACHER_CREATE:
                return INITIAL_STATE;
            default:
                return state;
    }
};