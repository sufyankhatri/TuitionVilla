import {
    SIGNIN_USER,
    SIGNIN_USER_FAIL,
    SIGNIN_USER_SUCCESS,
    SIGN_OUT
} from '../actions/types';

const INITIAL_STATE = {
    SignInLoading: false,

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_USER:
            return { ...state, SignInLoading: true, error: '' };
        case SIGNIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case SIGNIN_USER_FAIL:
            return { ...state, error: 'Error in Sign Up', password: '', SignInLoading: false };
        case SIGN_OUT:
            return { ...state, ...INITIAL_STATE };
        default :
            return state;
    }
}