import {
    STUDENT_CREATE_SUCCESS,
    STUDENT_CREATE_FAIL,
    STUDENT_UPDATE,
    IMAGE_PICKED,
    IMAGE_UPLOAD,
    TURN_IMAGE_LOAD,
    SUBJECTS_CHANGED,
    SIGN_OUT,
    STUDENT_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    name: "",
    address: "",
    phone: "",
    cnic: "",
    age: "",
    Class: "",
    institute: "",
    subjects: [],
    student: null,
    image: null,
    error: "",
    uri: null,
    imageLoading: false
};


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case STUDENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case STUDENT_CREATE_SUCCESS:
            return { ...state, ...INITIAL_STATE };
        case SUBJECTS_CHANGED:
            var Subject = state.subjects;
            if (action.payload.condition) {
                Subject.push(action.payload.val);
            }
            else {
                Subject.splice(Subject.indexOf(action.payload.val), 1);

            }
            return { ...state, subjects: Subject }
        case STUDENT_CREATE_FAIL:
            return { ...state, error: "Error in Creating Account", imageLoading: false }
        case TURN_IMAGE_LOAD:
            return { ...state, imageLoading: true }
        case IMAGE_UPLOAD:
            //console.log("hello jee",action.payload);
            return { ...state, uri: action.payload, imageLoading: false }
        case SIGN_OUT:
            //console.log("signed out!");
            return { ...state, ...INITIAL_STATE }
        case STUDENT_FETCH_SUCCESS:
            console.log(action.payload.uri);
            console.log(action.payload.email);
            console.log(action.payload.name);
            return { ...state, uri: action.payload.uri, name: action.payload.name, email: action.payload.email };
        default:
            return state;
    }
}   