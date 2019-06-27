import axios from 'axios';

export const FETCH_QUESTIONS_START = "FETCH_QUESTOINS_START";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTOINS_SUCCESS";
export const FETCH_QUESTIONS_FAIL = "FETCH_QUESTOINS_FAIL";

export const POST_QUESTION_START = "POST_QUESTION_START"
export const POST_QUESTION_SUCCESS = "POST_QUESTION_SUCCESS"
export const POST_QUESTION_FAIL = "POST_QUESTION_FAIL"

export const LOGGING_IN = 'LOGGING_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTERING = 'REGISTERING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const grabFeed = ()=> dispatch => {
    dispatch({ type: FETCH_QUESTIONS_START})
    axios
        .get('https://advice-giver.herokuapp.com/messages')
        .then(res =>
            dispatch({ 
                type: FETCH_QUESTIONS_SUCCESS, 
                payload: res.data
            })
            )
        .catch(err => dispatch ({type: FETCH_QUESTIONS_FAIL, payload: err}))
};

export const postQ = (question) => dispatch =>{
    dispatch({ type: POST_QUESTION_START })
    axios
        .post('https://advice-giver.herokuapp.com/messages', question)
        .then(res => 
            dispatch({ 
                type: POST_QUESTION_SUCCESS, 
                payload: res.data 
            })
            )
        .catch(err => dispatch({type: POST_QUESTION_FAIL, payload: err}))
};

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