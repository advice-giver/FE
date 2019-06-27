import axios from 'axios';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTERING = 'REGISTERING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const login = credentials => dispatch => {
    dispatch({ type: LOGGING_IN });
    axios.post('https://advice-giver.herokuapp.com/auth/login', credentials)
        .then(response => {
            console.log(response);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
            localStorage.setItem('token', response.data.token)
        })
        .catch(error => console.log(error))
}

export const register = credentials => dispatch => {
    dispatch({ type: REGISTERING });
    axios.post('https://advice-giver.herokuapp.com/auth/register', credentials)
        .then(response => {
            console.log(response);
            dispatch({ type: REGISTER_SUCCESS })
        })
        .catch(error => console.log(error))
}