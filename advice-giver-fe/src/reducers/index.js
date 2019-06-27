import { LOGGING_IN, LOGIN_SUCCESS, REGISTERING, REGISTER_SUCCESS } from '../actions';

const initialState = {
    registering: false,
    loggingIn: false
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGGING_IN:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loggingIn: false,
                user: action.payload
            }
        case REGISTERING:
            return {
                ...state,
                registering: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false
            }
        default:
            return state;
    }
}