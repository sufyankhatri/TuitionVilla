import {
    STUDENT_CREATE_SUCCESS,
    STUDENT_CREATE_FAIL,
    STUDENT_UPDATE,
    IMAGE_PICKED
} from '../actions/types';

const INITIAL_STATE = {
    Class: "",
    institute: "",
    student: null,
    image: null,
};


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case IMAGE_PICKED:
            return { ...state, image: { uri: action.payload.uri, base64: payload.data } }
        case STUDENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case STUDENT_CREATE_SUCCESS:
            return state;
        case STUDENT_CREATE_FAIL:
            return state;
        default:
            return state;
    }
}   