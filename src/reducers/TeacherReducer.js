import {
    TEACHER_UPDATE,
    TEACHER_CREATE,
    CLASS_INPUT,
    SUBJECT_INPUT
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    Address: '',
    phone: '',
    cnic: '',
    age: '',
    education: '',
    experience: '',
    classes: [],
    subjects: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEACHER_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case TEACHER_CREATE:
            return INITIAL_STATE;
        case CLASS_INPUT:
            var Class = state.classes;
            if (action.payload.condition === true) {

                Class.push(action.payload.val);
            }
            else {
                Class.splice(Class.indexOf(action.payload.val), 1);

            }

            return { ...state, classes: Class }
        case SUBJECT_INPUT:
            var Subject = state.subjects;
            if (action.payload.condition === true) {

                Subject.push(action.payload.val);
            }
            else {
                Subject.splice(Subject.indexOf(action.payload.val), 1);

            }
            return { ...state, subjects: Subject }

        default:
            return state;
    }
};